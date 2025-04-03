
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

/**
 * Télécharge un fichier à partir d'une URL externe
 * @param url L'URL externe du fichier à télécharger
 * @param filename Le nom du fichier une fois téléchargé
 */
export const downloadExternalFile = (url: string, filename: string) => {
  // Pour les URL externes, nous devons utiliser fetch pour récupérer le fichier
  // puis créer un blob URL pour le télécharger
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      return response.blob();
    })
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      downloadFile(blobUrl, filename);
      // Libérer l'URL de l'objet blob après le téléchargement
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 100);
    })
    .catch(error => {
      console.error('Erreur lors du téléchargement du fichier:', error);
      // Tentative de téléchargement direct comme solution de secours
      window.open(url, '_blank');
    });
};
