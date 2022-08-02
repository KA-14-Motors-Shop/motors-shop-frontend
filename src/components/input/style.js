import styled, {css} from "styled-components"

export const Container = styled.div`
  padding: 5px 10px;
  text-align: left;

    label{
        text-align: left;
        width: 37px;
        height: 17px;
        padding: 10px;
        color: var(--grey-1);
    }
`

export const InputContainer = styled.div`
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: 5px 10px;

input {
background: transparent;
background-color: var(--white-fixed);
border-radius: 4px;
border : 1px solid var(--grey-8);
padding: 0px 16px 0px 16px;

    align-items: center;
    width: 100%;
    height: 100%;
    
    &::placeholder {
        color: var(--grey-3);
    }
}

`