import React, { useState, useEffect } from 'react';
import { withPrefix } from 'gatsby';
import useImages from '../hooks/useImages';

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const RandomPicture = ({ folder = '' }) => {
  const imagesList = useImages().filter(({ relativeDirectory }) => relativeDirectory === folder);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (imagesList && imagesList.length !== 0) {
      // Update the document title using the browser API
      const { relativePath } = getRandomElement(imagesList);
      setImageSrc(withPrefix(`/medias/${relativePath}`));
    }
  }, [imagesList]);

  return (
    <>
      {imageSrc && (<img src={imageSrc} alt="" />)}
    </>
  );
};
export default RandomPicture;
