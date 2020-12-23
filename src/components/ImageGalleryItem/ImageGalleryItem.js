import React from 'react';

const ImageGalleryItem = ({ image, toggleModal }) => {

    const onClick = () => {
        toggleModal({
            status: true,
            src: image.largeImageURL,
            alt: image.tags,
        });
    };
        
    return (
        <li className="ImageGalleryItem">
            <img
                src={image.webformatURL}
                alt={image.tags}
                className="ImageGalleryItem-image"
                onClick={onClick}
            />
        </li>
    );
};

export default ImageGalleryItem;