import { useState, useEffect } from 'react';

const useFetchImage = (query) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
        try {
          const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
          const data = await response.json();
          setImageUrl(data.urls.regular);
        } catch (error) {
          console.error('Error fetching the image:', error);
        }
      };
      

    fetchImage();
  }, [query]);

  return imageUrl;
};

export default useFetchImage;

