import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ModalContainer, ProductMain } from "./styled";
import Button from "../../components/Button";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import { BsDot } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import AnuncioModal from "../../components/modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import { apiDeploy } from "../../services/api";
import { AuthContext } from "../../providers/auth";
import { toast } from "react-toastify";
import { AdvertisementsContext } from "../../providers/advertisements";

const ProductPage = () => {
  const { authenticated, token } = useContext(AuthContext);
  const { setGetAdvertisements, getAdvertisements } = useContext(
    AdvertisementsContext
  );

  const [galleryModal, setGalleryModal] = useState(false);
  const [commentValue, setCommentValue] = useState();
  const [product, setProduct] = useState([]);
  const [frontImage, setFrontImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [owner, setOwner] = useState([]);
  const [comments, setComments] = useState([]);
  const [modalImage, setModalImage] = useState(0);
  const [user] = useState(
    JSON.parse(localStorage.getItem("@MotorShop:user")) || []
  );
  const [makeGet, setMakeGet] = useState(false);

  const params = useParams();

  useEffect(() => {
    apiDeploy
      .get(`ads/${params.id}`)
      .then((resp) => {
        setProduct(resp.data);
        setFrontImages(resp.data.images.find(({ is_front }) => is_front));
        setGallery(resp.data.images.filter(({ is_front }) => !is_front));
        setOwner(resp.data.owner);
        setComments(resp.data.comments);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, [params.id, makeGet]);

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

  const createComment = () => {
    if (!commentValue) {
      return toast.error("Campo vazio!");
    }

    if (
      product.type === "auction" &&
      Number(commentValue) < Number(product.price)
    ) {
      return toast.error("Valor é menor do que o lance inicial!");
    }

    apiDeploy
      .post(
        `comments/${product.id}`,
        {
          type: product.type,
          value:
            product.type === "auction" ? Number(commentValue) : commentValue,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((_) => {
        toast.success("Comentário criado!");
        setMakeGet(!makeGet);
      })
      .catch((err) => console.log(err));
  };

  const commentDisable = () => {
    if (!authenticated) {
      return toast.error("Faça o login para comentar!");
    }

    if (user.id === owner.id) {
      return toast.error("Você não pode comentar no seu próprio anúncio!");
    }
  };

  const buyOrSellAd = () => {
    if (!authenticated) {
      return toast.error("Faça o login para realizar a compra!");
    }

    if (user.id === owner.id) {
      return toast.error("Você não pode comprar seu próprio produto!");
    }

    apiDeploy
      .patch(`ads/status/${product.id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        if (product.type === "sale") {
          toast.success("Compra realizada!");
        } else {
          toast.success("Venda realizada!");
        }
        setGetAdvertisements(!getAdvertisements);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Problemas com o servidor!");
      });
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

      <Header
        isLoggedIn={authenticated}
        username={authenticated && user.name}
      />
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
                <h6>R$ {product.price && product.price.replace(".", ",")}</h6>
              </div>

              {product.type === "sale" && (
                <Button
                  width="100px"
                  height="38px"
                  bgColor="var(--brand-1)"
                  fontColor="var(--white-fixed)"
                  fontSize="14px"
                  onClick={buyOrSellAd}
                >
                  Comprar
                </Button>
              )}
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
              <h3>{product.type === "sale" ? "Comentários" : "Lances"}</h3>
              <ul>
                {comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <div className="comment-header-div">
                        <DefaultProfilePicture
                          username={comment.user.name}
                          width="32px"
                          height="32px"
                        />
                        <span className="coment-name-span">
                          {comment.user.name}
                        </span>

                        <BsDot />

                        <span className="comment-date-span">
                          {parseInt(
                            (new Date() - new Date(comment.createdAt)) /
                              (1000 * 60 * 60 * 24)
                          ) === 0
                            ? "Hoje"
                            : parseInt(
                                (new Date() - new Date(comment.createdAt)) /
                                  (1000 * 60 * 60 * 24)
                              ) === 1
                            ? "há 1 dia"
                            : `há ${parseInt(
                                (new Date() - new Date(comment.createdAt)) /
                                  (1000 * 60 * 60 * 24)
                              )} dias`}
                        </span>
                      </div>
                      <p>
                        {product.type === "auction"
                          ? `R$ ${parseFloat(comment.value)
                              .toFixed(2)
                              .replace(".", ",")}`
                          : comment.value}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="create-comment-div">
              {authenticated && (
                <div className="creator-comment-div">
                  <DefaultProfilePicture
                    username={user.name}
                    width="32px"
                    height="32px"
                  />
                  <span>{user.name}</span>
                </div>
              )}

              {product.type === "sale" ? (
                <div className="write-comment-div">
                  <textarea
                    value={commentValue}
                    onChange={(evt) => setCommentValue(evt.target.value)}
                    placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                  />

                  <Button
                    width="108px"
                    height="38px"
                    bgColor={
                      !authenticated
                        ? "var(--grey-5)"
                        : user.id === owner.id
                        ? "var(--grey-5)"
                        : "var(--brand-1)"
                    }
                    borderColor={
                      !authenticated
                        ? "var(--grey-5)"
                        : user.id === owner.id
                        ? "var(--grey-5)"
                        : "var(--brand-1)"
                    }
                    fontColor="var(--white-fixed)"
                    fontSize="14px"
                    onClick={
                      !authenticated
                        ? commentDisable
                        : user.id === owner.id
                        ? commentDisable
                        : createComment
                    }
                  >
                    Comentar
                  </Button>
                </div>
              ) : product.type === "auction" ? (
                <div className="auction-comment-div">
                  <label>Lance</label>
                  <input
                    type="number"
                    placeholder="Inserir valor do lance"
                    value={commentValue}
                    onChange={(evt) => setCommentValue(evt.target.value)}
                  />
                  <Button
                    width="179px"
                    bgColor={
                      !authenticated
                        ? "var(--grey-5)"
                        : user.id === owner.id
                        ? "var(--grey-5)"
                        : "var(--brand-1)"
                    }
                    fontColor="var(--white-fixed)"
                    borderColor={
                      !authenticated
                        ? "var(--grey-5)"
                        : user.id === owner.id
                        ? "var(--grey-5)"
                        : "var(--brand-1)"
                    }
                    onClick={
                      !authenticated
                        ? commentDisable
                        : user.id === owner.id
                        ? commentDisable
                        : createComment
                    }
                  >
                    Inserir proposta
                  </Button>
                </div>
              ) : (
                false
              )}

              {product.type === "sale" && (
                <div className="comment-examples-div">
                  <span
                    onClick={(evt) => setCommentValue(evt.target.innerText)}
                  >
                    Gostei muito!
                  </span>
                  <span
                    onClick={(evt) => setCommentValue(evt.target.innerText)}
                  >
                    Incrível
                  </span>
                  <span
                    onClick={(evt) => setCommentValue(evt.target.innerText)}
                  >
                    Recomendarei para meus amigos!
                  </span>
                </div>
              )}
            </div>
          </section>
        </section>
      </ProductMain>
      <Footer />
    </>
  );
};

export default ProductPage;
