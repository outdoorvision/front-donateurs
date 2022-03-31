import React from 'react';
import { withPrefix } from 'gatsby';
import useImages from '../hooks/useImages';

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const RandomPicture = ({ folder = '' }) => {
  const imagesList = useImages().filter(({ relativeDirectory }) => relativeDirectory === folder);

  if (!imagesList || imagesList.length === 0) {
    return null;
  }

  const { relativePath } = getRandomElement(imagesList);

  return (
    <>
      {relativePath && (<img src={withPrefix(`/medias/${relativePath}`)} alt="" />)}
    </>
  );
};
export default RandomPicture;
