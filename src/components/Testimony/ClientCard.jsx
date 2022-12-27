const ClientCard = (props) => {
  const { image, title, details } = props;

  return (
    <div className="client-card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

ClientCard.defaultProps = {
  image: "/default/image.jpg",
  title: "Default Title",
  details: "Default details",
 
};

export default ClientCard;
