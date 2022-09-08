import CardContainer from "./styled";
import DefaultProfilePicture from "../../DefaultProfilePicture";
import { useHistory } from "react-router-dom";

const ProductCard = ({
  id,
  images,
  title,
  description,
  owner,
  mileage,
  year,
  price,
}) => {
  const history = useHistory();

  return (
    <CardContainer
      number={parseInt(Math.random() * (13 - 1) + 1)}
      onClick={() => history.push(`/product/${id}`)}
    >
      <figure>
        <img src={images.url} alt={`${title}_front_image`} />
        <figcaption>{`${title} Front Image`}</figcaption>
      </figure>

      <h5>{title}</h5>

      <p>{description}</p>

      <div className="owner-div">
        <DefaultProfilePicture
          username={owner.name}
          width="32px"
          height="32px"
        />
        <span>{owner.name}</span>
      </div>

      <div className="infos-div">
        <div>
          <span>{mileage} Km</span>
        </div>
        <div>
          <span>{year}</span>
        </div>
        <h6>R$ {price}</h6>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
