import React, { Component } from 'react';
import fetchImage from '../services/image-api';
import ImagesErrorView from '../ImageErrorView';
import ImageLoader from '../Loader';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import Searchbar from '../Searchbar';

class ImageInfo extends Component {
  state = {
    images: [],
    totalHits: 0,
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: null,
    notify: false,
    message: '',
    showPopup: false,
    showButton: false,
    targetImage: null,
  };

  componentDidMount() {
    this.searchImages();
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.searchImages(searchQuery, 1);
      this.setState({ page: 1 });
    }
    if (prevState.page !== page) {
      this.searchImages(searchQuery, page);
    }
  };
   searchImages(searchQuery = '', page = 1) {
    if (searchQuery !== '') {
      this.setState({
        isLoading: true,
        notify: false,
      });

      fetchImage(searchQuery, page)
        .then(newImage => {
          if (page === 1) {
            this.setState({
              totalHits: newImage.totalHits,
              images: newImage.hits,
            });
          } else {
            this.setState(prevState => ({
              images: [...prevState.images, ...newImage.hits],
            }));
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
          this.checkLoadMore();
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    } else {
      this.setState({
        images: [],
        showButton: false,
        message: 'Please input search request',
        notify: true,
      });
    }
  };

  onSubmit = value => {
    this.setState({ searchQuery: value });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  checkLoadMore = () => {
    const { totalHits, images } = this.state;

    if (totalHits > images.length) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }

    if (!totalHits) {
      this.setState({
        message: 'Nothing was found. Try again.',
        notify: true,
      });
    } else {
      this.setState({ notify: false });
    }
  };

   toggleModal = ({ status, src, alt }) => {
    if (status) {
      this.setState({
        targetImage: { src, alt },
        showPopup: true,
      });
    } else {
      this.setState({
        targetImage: null,
        showPopup: false,
      });
    }
  };

  render() {
    const {
      images,
      isLoading,
      error,
      notify,
      message,
      showPopup,
      targetImage,
      showButton,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <ImagesErrorView message={error.message} />}
        {isLoading && (
          <ImageLoader />
        )}
        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        {notify && <ImagesErrorView message={message} />}
        {showPopup && (
          <Modal
            src={targetImage.src}
            alt={targetImage.alt}
            toggleModal={this.toggleModal}
          />
        )}
        {showButton && <Button onClick={this.onClickLoadMore} />}
      </>
    );
  }
}

export default ImageInfo;
