import styled from "styled-components"

export const GenericModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* position: absolute; */
width: 100%;
/* top: 120px; */

 form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 520px;
    height: 1063px;
    border-radius: 8px;
 }

 input {        /* Somente para testes */
    width: 150px; 
    height: 50px; 
 }

 h2{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    max-width: 107px;
    max-height: 20px;
 }


 h3{
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    max-width: 107px;
    max-height: 24px;

 }




`