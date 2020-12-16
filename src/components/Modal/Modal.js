import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
      
        const { src, alt } = this.props;

        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );
    };
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Modal;