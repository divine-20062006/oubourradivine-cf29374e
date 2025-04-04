
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Paperclip, X, FileText } from "lucide-react";

interface AttachmentInputProps {
  attachments: File[];
  setAttachments: React.Dispatch<React.SetStateAction<File[]>>;
}

export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  } else if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  }
};

const AttachmentInput = ({ attachments, setAttachments }: AttachmentInputProps) => {
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Vérifier la taille totale des fichiers (limite à 5MB)
      const totalSize = [...attachments, ...Array.from(files)].reduce(
        (total, file) => total + file.size, 0
      );
      
      if (totalSize > 5 * 1024 * 1024) {
        toast({
          title: "Fichiers trop volumineux",
          description: "La taille totale des pièces jointes ne doit pas dépasser 5MB",
          variant: "destructive"
        });
        return;
      }
      
      // Limiter à 3 fichiers maximum
      if (attachments.length + files.length > 3) {
        toast({
          title: "Trop de fichiers",
          description: "Vous ne pouvez pas attacher plus de 3 fichiers",
          variant: "destructive"
        });
        return;
      }
      
      // Ajout des nouveaux fichiers à la liste
      const newFiles = Array.from(files);
      console.log("Fichiers ajoutés:", newFiles.map(f => `${f.name} (${formatFileSize(f.size)})`));
      
      setAttachments(prev => [...prev, ...newFiles]);
    }
    
    // Réinitialiser l'input pour permettre de sélectionner le même fichier plusieurs fois
    e.target.value = '';
  };

  const removeAttachment = (index: number) => {
    const fileToRemove = attachments[index];
    console.log("Fichier supprimé:", fileToRemove.name);
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <label htmlFor="attachments" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
        Pièces jointes (3 max, 5MB total)
      </label>
      <div className="flex items-center gap-2">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 rounded-lg hover:bg-[#0AFFFF]/10 transition-colors"
        >
          <Paperclip className="h-4 w-4 text-[#0AFFFF]" />
          <span className="text-sm text-white">Ajouter un fichier</span>
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
      </div>
      
      {/* Liste des fichiers attachés avec meilleure présentation */}
      {attachments.length > 0 && (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-[#0AFFFF]">Fichiers ajoutés ({attachments.length}/3):</p>
          {attachments.map((file, index) => (
            <div 
              key={`${file.name}-${index}`} 
              className="flex items-center justify-between px-3 py-2 bg-[#1A1F2C] rounded-lg border border-[#0AFFFF]/30"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <FileText className="h-4 w-4 flex-shrink-0 text-[#0AFFFF]" />
                <span className="text-sm text-white truncate max-w-[180px]">{file.name}</span>
                <span className="text-xs text-gray-400 flex-shrink-0">({formatFileSize(file.size)})</span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeAttachment(index)}
                className="h-6 w-6 p-0 text-gray-400 hover:text-white hover:bg-transparent"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <p className="text-xs text-gray-400">
            Taille totale: {formatFileSize(attachments.reduce((total, file) => total + file.size, 0))}
          </p>
        </div>
      )}
    </div>
  );
};

export default AttachmentInput;
