import styled from "styled-components";

const CardRegisterContainer = styled.form`
max-width: 411px;
height: 1630px;

border: none ;
border-radius: 4px;

background-color: var(--white-fixed);
/* background-color: grey; */

display: flex;
flex-direction: column;

padding: 44px 48px;



.div-endereco-row{
    max-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 9px;
}
.div-endereco-row .container div{
padding: 5px 0; 
}
.div-endereco-row .container input{
padding: 0 0 0 10px ;
} 

.container{
    margin: 10px 0px 12px 0px;
}

.container label{
    /* color: var(--grey-1); */
    font-size: 17px;
}

p{
    margin: 32px 0px 22px 0;
    font-weight: 500;
    color: var(--black-1);
}

.span-errored{
    height: 0px;
    color: var(--alert-1);
    margin-left: 50%;
}


@media  (max-width: 320px){

    width: 100%;

    .btn-comprador{
        margin-right: 10px;
    }
    .btn-finalizar{
        width: 230px;

    }

    .div-endereco-row .container input{
    padding: 0 0 0 5px ;
    } 
    .container label{
    font-size: 13px;
    }
}

`

export default CardRegisterContainer