import { Container, InputContainer } from "./style"

// TODAS ESTILIZACOES A RESPEITO DAS CORES E TAMANHOS SERAO PASSADOS POR PROPS
// ESTE E APENAS UM EXEMPLO ILUSTRATIVO FIXO

const Input = ({width, height, label, ...rest}) => {
    return(
        <Container>
            <label>{label}</label>
            <InputContainer
            width={width}
            height={height}>
            <input {...rest}/>
            </InputContainer>
        </Container>
    )
}

export default Input