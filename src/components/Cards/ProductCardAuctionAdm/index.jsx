import CardContainer from "./styled";
import { BsClock } from "react-icons/bs";
import Button from "../../Button";

const ProductCardAuctionAdm = ({
  id,
  time,
  images,
  title,
  description,
  mileage,
  year,
  price,
  editFunction,
  seeFunction,
}) => {
  return (
    <CardContainer id={id}>
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

          <h5>{title}</h5>

          <p>{description}</p>

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
        <Button
          width="132px"
          height="38px"
          bgColor="var(--brand-1)"
          fontColor="var(--grey-10)"
          borderColor="var(--grey-10)"
          fontSize="14px"
          className="edit-button"
          onClick={editFunction}
        >
          Editar
        </Button>
        <Button
          width="132px"
          height="38px"
          bgColor="var(--brand-1)"
          fontColor="var(--grey-10)"
          borderColor="var(--grey-10)"
          fontSize="14px"
          className="see-button"
          onClick={seeFunction}
        >
          Ver como
        </Button>
      </div>
    </CardContainer>
  );
};

export default ProductCardAuctionAdm;
