import CardContainer from "./styled";
import Button from "../../Button";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCardAdm = ({
  id,
  images,
  title,
  description,
  mileage,
  year,
  price,
  editFunction,
  is_active,
}) => {
  const history = useHistory();

  return (
    <CardContainer id={id} is_active={is_active}>
      <figure>
        <span>{is_active ? "Ativo" : "Inativo"}</span>
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
          onClick={
            is_active ? editFunction : () => toast.error("Anúncio desativado")
          }
        >
          Editar
        </Button>
        <Button
          width="105px"
          height="38px"
          fontColor="var(--grey-1)"
          fontSize="14px"
          onClick={
            is_active
              ? () => history.push(`/product/${id}`)
              : () => toast.error("Anúncio desativado")
          }
        >
          Ver como
        </Button>
      </div>
    </CardContainer>
  );
};

export default ProductCardAdm;
