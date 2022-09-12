import CardContainer from "./styled";
import Button from "../../Button";

const ProductCardAdm = ({
  id,
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
      <figure>
        <img src={images.url} alt={`${title}_front_image`} />
        <figcaption>{`${title} Front Image`}</figcaption>
      </figure>

      <h5>{title}</h5>

      <p>{description}</p>

      <div className="infos-div">
        <div>
          <span>{mileage} Km</span>
        </div>
        <div>
          <span>{year}</span>
        </div>
        <h6>R$ {price}</h6>
      </div>

      <div className="buttons-div">
        <Button
          width="80px"
          height="38px"
          fontColor="var(--grey-1)"
          fontSize="14px"
          onClick={editFunction}
        >
          Editar
        </Button>
        <Button
          width="105px"
          height="38px"
          fontColor="var(--grey-1)"
          fontSize="14px"
          onClick={seeFunction}
        >
          Ver como
        </Button>
      </div>
    </CardContainer>
  );
};

export default ProductCardAdm;
