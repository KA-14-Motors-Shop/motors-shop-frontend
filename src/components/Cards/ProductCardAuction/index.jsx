import CardContainer from "./styled";
import { BsClock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import DefaultProfilePicture from "../../DefaultProfilePicture";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

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
    <CardContainer
      number={parseInt(Math.random() * (13 - 1) + 1)}
      id={id}
      onClick={() => history.push(`/product/${id}`)}
    >
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
