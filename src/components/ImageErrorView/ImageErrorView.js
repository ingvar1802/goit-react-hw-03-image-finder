import PropTypes from 'prop-types';

function ImageErrorView({ message }) {
  return (
    <div role="alert">
      <p>Something went wrong. Error: {message}</p>
    </div>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImageErrorView;