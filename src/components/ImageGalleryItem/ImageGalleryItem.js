import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { src, alt, largeImageUrl } = this.props;
        const { showModal } = this.state;
        
        return (
            <li className="ImageGalleryItem">
                <img src={src}
                    alt={alt}
                    className="ImageGalleryItem-image"
                    onClick={this.toggleModal} />
                {showModal && (
                    <Modal src={largeImageUrl} alt={alt} onClose={this.toggleModal} />
                )}
            </li>
        );
    };
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;