import ReactInputMask from "react-input-mask";
import { Container, InputContainer } from "./style";

// TODAS ESTILIZACOES A RESPEITO DAS CORES E TAMANHOS SERAO PASSADOS POR PROPS
// ESTE E APENAS UM EXEMPLO ILUSTRATIVO FIXO

const Input = ({
  width,
  children,
  height,
  label,
  inputOrNot,
  register,
  name,
  errored,
  placeholderMask,
  ...rest
}) => {
  return (
    <Container isErrored={!!errored} className="container">
      <div className="label-div">
        <label>{label}</label>
        {children}
      </div>
      <InputContainer isErrored={!!errored} width={width} height={height}>
        {inputOrNot ? (
          placeholderMask ? (
            <ReactInputMask
              mask={placeholderMask}
              {...register(name)}
              name={name}
              type={"text"}
              {...rest}
            />
          ) : (
            <input {...register(name)} name={name} type={"text"} {...rest} />
          )
        ) : (
          <textarea {...register(name)} {...rest} />
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
