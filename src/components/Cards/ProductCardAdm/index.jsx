import CardContainer from "./styled";
import Car from "./carro.png";
import Button from "../../Button";

const ProductCardAdm = ({
  id,
  img,
  title,
  description,
  kilometers,
  year,
  price,
}) => {
  return (
    <CardContainer number={parseInt(Math.random() * (13 - 1) + 1)}>
      <figure>
        <img src={Car} alt="Car_Image" />
        <figcaption>Car Image</figcaption>
      </figure>

      <h5>Product title 1 line</h5>

      <p>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem dolor sit amet consectetur adipisicing elit. Ut
        exercitationem, doloribus eos voluptate et vero quidem quae voluptates
        velit, quod ullam praesentium dolorem magnam consequuntur odio sit id
        cum porro?
      </p>

      <div className="infos-div">
        <div>
          <span>0 Km</span>
        </div>
        <div>
          <span>2019</span>
        </div>
        <h6>R$ 20.000.00</h6>
      </div>

      <div className="buttons-div">
        <Button
          width="80px"
          height="38px"
          fontColor="var(--grey-1)"
          fontSize="14px"
        >
          Editar
        </Button>
        <Button
          width="105px"
          height="38px"
          fontColor="var(--grey-1)"
          fontSize="14px"
        >
          Ver como
        </Button>
      </div>
    </CardContainer>
  );
};

export default ProductCardAdm;
