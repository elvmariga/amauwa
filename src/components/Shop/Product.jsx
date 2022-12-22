

const Product = (props) => {
  const { image, title, details, buttonText, handleClick } = props;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{details}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

Product.defaultProps = {
  image: "/default/image.jpg",
  title: "Default Title",
  details: "Default details",
  buttonText: "Click me",
  handleClick: () => {},
};

export default Product;
