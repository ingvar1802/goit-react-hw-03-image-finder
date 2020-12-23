import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = event => {
        if (event.key === 'Escape' || event.target === event.currentTarget) {
            this.props.toggleModal({status: false});
        }
    };

    render() {
      
        const { src, alt } = this.props;

        return createPortal(
            <div className="Overlay" onClick={this.handleKeyDown}>
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );
    };
};

export default Modal;