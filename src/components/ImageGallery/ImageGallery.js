import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;