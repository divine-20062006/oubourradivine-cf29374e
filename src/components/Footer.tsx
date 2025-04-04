
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Info } from "lucide-react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 w-full bg-[#1A1F2C]/80 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-white/60 text-sm">
            © {currentYear} Portfolio Divine Oubourra - Tous droits réservés
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-[#00FF41] transition-colors flex items-center gap-1"
              >
                <Info className="w-4 h-4" /> Mentions légales
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] bg-[#1A1F2C] text-white border-[#00FF41]/30">
              <DialogHeader>
                <DialogTitle className="text-[#00FF41]">Mentions légales</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Propriétaire du site</h3>
                  <p>Divine Oubourra</p>
                  <p>Email de contact: divine.oubourra@example.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Hébergement</h3>
                  <p>Ce site est hébergé par Example Hosting</p>
                  <p>123 Rue de l'Hébergement, 75000 Paris</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Propriété intellectuelle</h3>
                  <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de Divine Oubourra.
                  Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Protection des données personnelles</h3>
                  <p>Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                  Pour l'exercer, contactez-nous à l'adresse mentionnée ci-dessus.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
