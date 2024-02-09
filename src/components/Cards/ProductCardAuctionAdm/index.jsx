import CardContainer from "./styled";
import { BsClock } from "react-icons/bs";
import Button from "../../Button";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

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
  is_active,
}) => {
  const history = useHistory();

  const [counter, setCounter] = useState(7200);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          return 7200;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
  };

  return (
    <CardContainer is_active={is_active} id={id}>
      <section className="product-section">
        <figure>
          <img src={images.url} alt={`${title}_front_image`} />
          <figcaption>{`${title} Front Image`}</figcaption>
        </figure>

        <div className="auction-div">
          <div className="timer-div">
            <span>
              <BsClock /> {formatTime(counter)}
            </span>
          </div>

          <span className="is-active-span ">
            {is_active ? "Ativo" : "Inativo"}
          </span>

          <h5>{title}</h5>

          <p>{description}</p>

          <div className="infos-div">
            {/* <section> */}
            <div>
              <span>{year}</span>
            </div>
            <div>
              <span>{mileage} Km</span>
            </div>
            {/* </section> */}

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
          onClick={
            is_active ? editFunction : () => toast.error("Anúncio desativado")
          }
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

export default ProductCardAuctionAdm;
