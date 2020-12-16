import { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
    scroll = () => {
    this.props.onClick();
    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }, 1000)
};
   
    render() {
        return (
            <button type="button" className="Button" onClick={this.scroll}>
                Load More
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Button;