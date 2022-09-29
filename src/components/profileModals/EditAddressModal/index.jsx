import AnuncioModal from "../../modal";
import { EditAdrsContainer } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../input";
import Button from "../../Button";
import { toast } from "react-toastify";

const EditAddressModal = ({ modalState, setModalState, user }) => {
  const schema = yup.object().shape({
    cep: yup.string(),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup
      .number()
      .nullable(true)
      .transform((val) => (val === Number(val) ? val : null)),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const isEmpty = Object.values(data).every((v) => v === "" || v === null);

    if (isEmpty) {
      setModalState(false);
      return toast.info("Campos vazios, nenhuma alteração feita.");
    }

    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        delete data[key];
      }
    }

    console.log(data);
  };

  return (
    <EditAdrsContainer>
      <AnuncioModal
        title="Editar endereço"
        modalState={modalState}
        setModalState={setModalState}
      >
        <form
          className="edit__address__form"
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <h6>Informações de endereço</h6>

          <div className="single__input__field__div">
            <Input
              label="CEP"
              register={register}
              name="cep"
              errored={errors.cep}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.cep}
            />
          </div>

          <div className="double__input__fields__div">
            <Input
              label="Estado"
              register={register}
              name="state"
              errored={errors.state}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.state}
            />

            <Input
              label="Cidade"
              register={register}
              name="city"
              errored={errors.city}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.city}
            />
          </div>

          <div className="single__input__field__div">
            <Input
              label="Rua"
              register={register}
              name="street"
              errored={errors.street}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.street}
            />
          </div>

          <div className="double__input__fields__div">
            <Input
              label="Número"
              register={register}
              name="number"
              errored={errors.number}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.number}
            />

            <Input
              label="Complemento"
              register={register}
              name="complement"
              errored={errors.complement}
              height="48px"
              inputOrNot={true}
              placeholder={user.address.complement}
            />
          </div>

          <div className="editadrs__btns__container">
            <Button
              type="button"
              fontColor="var(--grey-2)"
              bgColor="var(--grey-6)"
              borderColor="var(--grey-6)"
              onClick={() => setModalState(false)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              bgColor="var(--brand-3)"
              borderColor="var(--brand-3)"
              fontColor="var(--brand-4)"
              width="180px"
            >
              Salvar alterações
            </Button>
          </div>
        </form>
      </AnuncioModal>
    </EditAdrsContainer>
  );
};

export default EditAddressModal;
