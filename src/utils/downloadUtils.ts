
/**
 * Utilitaire pour le téléchargement de fichiers
 */

/**
 * Télécharge un fichier depuis l'URL spécifiée
 * @param url L'URL du fichier à télécharger
 * @param filename Le nom du fichier une fois téléchargé
 */
export const downloadFile = (url: string, filename: string) => {
  // Créer un élément <a> temporaire
  const link = document.createElement('a');
  
  // Définir l'URL et le nom du fichier téléchargé
  link.href = url;
  link.download = filename;
  
  // Ajouter l'élément au DOM, cliquer dessus, puis le supprimer
  document.body.appendChild(link);
  link.click();
  
  // Petit délai avant de supprimer le lien pour s'assurer que le téléchargement démarre
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
};

