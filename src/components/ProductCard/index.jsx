import CardContainer from "./styled";
import Car from "./carro.png";

const ProductCard = ({
  id,
  img,
  title,
  description,
  owner,
  kilometers,
  year,
  price,
  onClick,
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

      <div className="owner-div">
        <div>R</div>
        <span>Anunciante</span>
      </div>

      <div className="infos-div">
        <div>
          <span>0 Km</span>
        </div>
        <div>
          <span>2019</span>
        </div>
        <h6>R$ 20.000.00</h6>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
