import styled from "styled-components"

export const Container = styled.div`
  padding: 5px 3px;
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
max-width: ${(props) => props.width};
/* min-width: 180px; */
height: ${(props) => props.height};
padding: 5px 10px;

input {
background: transparent;
background-color: var(--white-fixed);
border-radius: 4px;
border : 1px solid var(--grey-8);
padding: 0px 16px 0px 16px;
margin-top: 4px;

    align-items: center;
    width: 100%;
    height: 100%;
    
    &::placeholder {
        color: var(--grey-3);
    }
}
textarea {
background: transparent;
background-color: var(--white-fixed);
border-radius: 4px;
border : 1px solid var(--grey-8);
padding: 8px 16px 0px 16px;
margin-top: 4px;
resize: none;

    align-items: center;
    width: 100%;
    height: 100%;
    
    &::placeholder {
        color: var(--grey-3);
    }
}


`