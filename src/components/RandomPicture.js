import React from 'react';

import useImages from '../hooks/useImages';

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const RandomPicture = ({ folder = '' }) => {
  const imagesList = useImages().filter(({ relativeDirectory }) => relativeDirectory === folder);
  const { relativePath } = getRandomElement(imagesList);

  return (
    <>
      {relativePath && (<img src={`medias/${relativePath}`} alt="" />)}
    </>
  );
};
export default RandomPicture;
