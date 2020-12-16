import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageInfo from './components/ImageInfo';

export default class App extends Component {
    state = {
        imageName: '',
    };

    handleFormSubmit = imageName => {
        this.setState({ imageName });
    };

    render() {
        return (
            <>
                <Searchbar onSubmit={this.handleFormSubmit} />

                <ImageInfo imageName={this.state.imageName} />
                <ToastContainer autoClose={2000} />
            </>
        );
    };
}