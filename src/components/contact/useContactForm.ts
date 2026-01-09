import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

// Simple math CAPTCHA
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: a + b };
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Veuillez renseigner votre nom.").max(100, "Nom trop long (100 caractères max)."),
  email: z.string().trim().email("Veuillez renseigner un email valide.").max(255, "Email trop long."),
  message: z
    .string()
    .trim()
    .min(1, "Veuillez écrire un message.")
    .max(2000, "Message trop long (2000 caractères max)."),
  captcha: z.string().min(1, "Veuillez résoudre le CAPTCHA."),
});

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaData, setCaptchaData] = useState(generateCaptcha);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Veuillez vérifier les champs du formulaire.";
      toast({
        title: "Erreur",
        description: msg,
        variant: "destructive",
      });
      return;
    }

    // Validate CAPTCHA answer
    if (parseInt(parsed.data.captcha, 10) !== captchaData.answer) {
      toast({
        title: "Erreur",
        description: "Réponse CAPTCHA incorrecte. Veuillez réessayer.",
        variant: "destructive",
      });
      setCaptchaData(generateCaptcha());
      setFormData(prev => ({ ...prev, captcha: "" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", parsed.data.name);
      formDataToSend.append("email", parsed.data.email);
      formDataToSend.append("message", parsed.data.message);
      formDataToSend.append("_subject", `Nouveau message de ${parsed.data.name} via Portfolio`);

      const response = await fetch("https://formspree.io/f/xgowvjlb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      });

      const result = await response.json().catch(() => null);
      const hasErrors = Array.isArray(result?.errors) && result.errors.length > 0;

      if (response.ok && !hasErrors) {
        toast({
          title: "Message envoyé !",
          description: "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
        });
        setCaptchaData(generateCaptcha());
        setFormData({ name: "", email: "", message: "", captcha: "" });
      } else {
        toast({
          title: "Erreur",
          description: "Impossible d'envoyer le message pour le moment. Veuillez réessayer dans quelques instants.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer dans quelques instants.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    captchaQuestion: captchaData.question,
    handleChange,
    handleSubmit,
  };
};

