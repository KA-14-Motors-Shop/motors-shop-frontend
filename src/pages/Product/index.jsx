import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ModalContainer, ProductMain } from "./styled";
import Button from "../../components/Button";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import { BsDot } from "react-icons/bs";
import { useEffect, useState } from "react";
import AnuncioModal from "../../components/modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import { apiDeploy } from "../../services/api";

const ProductPage = () => {
  const [galleryModal, setGalleryModal] = useState(false);
  const [commentValue, setCommentValue] = useState();
  const [product, setProduct] = useState([]);
  const [frontImage, setFrontImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [owner, setOwner] = useState([]);
  const [modalImage, setModalImage] = useState(0);

  const params = useParams();

  useEffect(() => {
    apiDeploy
      .get(`ads/${params.id}`)
      .then((resp) => {
        setProduct(resp.data);
        setFrontImages(resp.data.images.find(({ is_front }) => is_front));
        setGallery(resp.data.images.filter(({ is_front }) => !is_front));
        setOwner(resp.data.owner);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const changeModalImage = (comand) => {
    if (comand === "add") {
      modalImage === gallery.length - 1
        ? setModalImage(0)
        : setModalImage(modalImage + 1);
    } else if (comand === "sub") {
      modalImage === 0
        ? setModalImage(gallery.length - 1)
        : setModalImage(modalImage - 1);
    }
  };

  const history = useHistory();

  return (
    <>
      <ModalContainer>
        {galleryModal && (
          <AnuncioModal
            title={"Imagem do veículo"}
            modalState={galleryModal}
            setModalState={setGalleryModal}
          >
            <figure>
              <img
                src={gallery[modalImage].url}
                alt={`${product.title}_Image`}
              />
              <figcaption>{product.title} Image</figcaption>
              <div className="move-gallery-div">
                <AiOutlineLeft
                  onClick={() => {
                    changeModalImage("sub");
                  }}
                />
                <AiOutlineRight
                  onClick={() => {
                    changeModalImage("add");
                  }}
                />
              </div>
            </figure>
          </AnuncioModal>
        )}
      </ModalContainer>

      <Header />
      <ProductMain>
        <section className="product-main-section">
          <section className="product-infos-section">
            <figure>
              <img
                src={frontImage.url}
                alt={`${product.title}_Principal_Image`}
              />
              <figcaption>{`${product.title} Principal Image`}</figcaption>
            </figure>

            <div className="title-div">
              <h1>{product.title}</h1>
              <div className="infos-div">
                <div>
                  <span>{product.year}</span>
                </div>
                <div>
                  <span>{product.mileage} KM</span>
                </div>
                <h6>R$ {product.price}</h6>
              </div>

              <Button
                width="100px"
                height="38px"
                bgColor="var(--brand-1)"
                fontColor="var(--white-fixed)"
                fontSize="14px"
              >
                Comprar
              </Button>
            </div>

            <div className="description-div">
              <h3>Descrição</h3>
              <p>{product.description}</p>
            </div>
          </section>

          <section className="product-complementary-section">
            <div className="pictures-div">
              <h3>Fotos</h3>
              <div
                onClick={() => setGalleryModal(!galleryModal)}
                data-testid="galleryDiv"
              >
                {gallery.map(({ url, id }, index) => {
                  if (index <= 5) {
                    return (
                      <figure key={id}>
                        <img src={url} alt="Car_Photo" />
                        <figcaption>Car Photo</figcaption>
                      </figure>
                    );
                  }
                })}
              </div>
            </div>

            <div className="owner-div">
              <DefaultProfilePicture
                username={owner.name}
                width="77px"
                height="77px"
              />
              <h3>{owner.name}</h3>
              <p>{owner.description}</p>
              <Button
                width="206px"
                bgColor="var(--grey-0)"
                fontColor="var(--white-fixed)"
                onClick={() => history.push(`/userProducts/${owner.id}`)}
              >
                Ver todos anúncios
              </Button>
            </div>
          </section>

          <section className="product-comments-section">
            <div className="list-comments-div">
              <h3>Comentários</h3>
              <ul>
                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>

                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
              </ul>
            </div>

            <div className="create-comment-div">
              <div className="creator-comment-div">
                <DefaultProfilePicture
                  username="Samuel Leão"
                  width="32px"
                  height="32px"
                />
                <span>Samuel Leão</span>
              </div>
              <div className="write-comment-div">
                <textarea
                  value={commentValue}
                  onChange={(evt) => setCommentValue(evt.target.value)}
                  placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                />

                <Button
                  width="108px"
                  height="38px"
                  bgColor="var(--brand-1)"
                  borderColor="var(--brand-1)"
                  fontColor="var(--white-fixed)"
                  fontSize="14px"
                >
                  Comentar
                </Button>
              </div>
              <div className="comment-examples-div">
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Gostei muito!
                </span>
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Incrível
                </span>
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Recomendarei para meus amigos!
                </span>
              </div>
            </div>
          </section>
        </section>
      </ProductMain>
      <Footer />
    </>
  );
};

export default ProductPage;
