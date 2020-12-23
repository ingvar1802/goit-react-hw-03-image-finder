import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
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
                <ImageInfo imageName={this.state.imageName} />
                <ToastContainer autoClose={2000} />
            </>
        );
    };
}