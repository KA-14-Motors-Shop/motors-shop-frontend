import { Container, InputContainer } from "./style"

// TODAS ESTILIZACOES A RESPEITO DAS CORES E TAMANHOS SERAO PASSADOS POR PROPS
// ESTE E APENAS UM EXEMPLO ILUSTRATIVO FIXO

const Input = ({width, height, label,inputOrNot, ...rest}) => {
    return(
        <Container className="container">
            <label>{label}</label>
            <InputContainer
            width={width}
            height={height}>
            {inputOrNot && <input type={"text"} value={null} {...rest}/>}
            {!inputOrNot && <textarea {...rest}/>}
            </InputContainer>
        </Container>
    )
}

export default Input