import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        imageName: '',
    };

    changeInput = evt => {
        this.setState({ imageName: evt.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            toast('Enter the word');
            return;
        }

        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <ImSearch />
                    </button>
                    <input
                        value={this.state.imageName}
                        onChange={this.changeInput}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    
                </form>
            </header>
        );
    };
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;