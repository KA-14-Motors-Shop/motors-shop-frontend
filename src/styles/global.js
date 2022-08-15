import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

:root {
  --brand-1: #4529E6;
  --brand-2: #5126EA;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD; 
  --grey-0: #0B0D0D;
  --grey-1: #212529;
  --grey-2: #495057;
  --grey-3: #868E96;
  --grey-4: #ADB5BD;
  --grey-5: #CED4DA;
  --grey-6: #DEE2E6;
  --grey-7: #E9ECEF;
  --grey-8: #F1F3F5;
  --grey-9: #F8F9FA;
  --grey-10: #FDFDFD;
  --white-fixed: #FFFFFF;
  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;
  --sucess-1: #18794E;
  --sucess-2: #CCEBD7;
  --sucess-3: #DDF3E4;
  --random-1: #E34D8C;
  --random-2: #C04277;
  --random-3: #7D2A4D;
  --random-4: #7000FF;
  --random-5: #6200E3;
  --random-6: #36007D;
  --random-7: #349974;
  --random-8: #2A7D5F;
  --random-9: #153D2E;
  --random-10: #6100FF;
  --random-11: #5700E3;
  --random-12: #30007D;
  --black-1:#000000;
}

body, html,label,input,textarea {
 font-family: "Inter", sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  font-family: "Lexend", sans-serif;
}

li {
    list-style: none;
}

button {
    cursor: pointer;
    :hover {
    filter: brightness(75%);
    transition: 0.3s;
    }
    :active {
    filter: brightness(1.6);
    transition: 0.3s;
    }
}

`;

export default GlobalStyle;
