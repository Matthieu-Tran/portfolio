// This function loads all images from a given directory and returns an object with the image paths as keys and the image modules as values.
// src/utils/loadImages.js

const importAllImages = (r) => {
    const images = {};
    r.keys().forEach((key) => {
      const path = key.replace('./', '');
      images[path] = r(key);
    });
    return images;
  };
  
  // Import from both folders
  const projectImages = importAllImages(
    require.context('../assets/projects-images', true, /\.(png|jpe?g|svg)$/)
  );
  
  const logoImages = importAllImages(
    require.context('../assets/logo', true, /\.(png|jpe?g|svg)$/)
  );
  
  // Combine both
  const images = {
    ...projectImages,
    ...logoImages,
  };
  
  export default images;
  