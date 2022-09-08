import CardContainer from "./styled";
import { BsClock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import DefaultProfilePicture from "../../DefaultProfilePicture";

const ProductCardAuction = ({
  id,
  time,
  images,
  title,
  description,
  owner,
  mileage,
  year,
  price,
}) => {
  return (
    <CardContainer number={parseInt(Math.random() * (13 - 1) + 1)} id={id}>
      <section className="product-section">
        <figure>
          <img src={images.url} alt={`${title}_front_image`} />
          <figcaption>{`${title} Front Image`}</figcaption>
        </figure>

        <div className="auction-div">
          <div className="timer-div">
            <span>
              <BsClock /> 01:58:00
            </span>
          </div>

          <h5>{title} </h5>

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
              <span>{year}</span>
            </div>
            <div>
              <span>{mileage} Km</span>
            </div>
            <h6>R$ {price}</h6>
          </div>
        </div>
      </section>

      <div className="link-div">
        <span>Acessar página do leilão</span>
        <BsArrowRight />
      </div>
    </CardContainer>
  );
};

export default ProductCardAuction;
