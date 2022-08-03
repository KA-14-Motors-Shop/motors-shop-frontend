import CardContainer from "./styled";
import Car from "./Photo.png";
import { BsClock } from "react-icons/bs";
import Button from "../Button";

const ProductCardAuctionAdm = ({
  id,
  time,
  img,
  title,
  description,
  kilometers,
  year,
  price,
}) => {
  return (
    <CardContainer>
      <section className="product-section">
        <figure>
          <img src={Car} alt="Car_image" />
          <figcaption>Car Image</figcaption>
        </figure>

        <div className="auction-div">
          <div className="timer-div">
            <span>
              <BsClock /> 01:58:00
            </span>
          </div>

          <h5>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h5>

          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem dolor sit amet consectetur adipisicing elit. Ut
            exercitationem, doloribus eos voluptate et vero quidem quae
            voluptates velit, quod ullam praesentium dolorem magnam consequuntur
            odio sit id cum porro?
          </p>

          <div className="infos-div">
            <div>
              <span>2013</span>
            </div>
            <div>
              <span>0 Km</span>
            </div>
            <h6>R$ 20.000.00</h6>
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
        >
          Ver como
        </Button>
      </div>
    </CardContainer>
  );
};

export default ProductCardAuctionAdm;
