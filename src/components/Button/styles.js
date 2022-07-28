import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.isBig ? "146px" : "119px")};
  height: ${(props) => (props.isBig ? "48px" : "38px")};
  background-color: ${(props) => props.bgColor};
  border: ${(props) => `2px solid ${props.borderColor}`};
  color: ${(props) => props.fontColor};
  border-radius: 4px;
  font-size: ${(props) => (props.isBig ? "16px" : "14px")};
  font-weight: 600;

  :hover {
    transition: 0.3s;
    background-color: ${(props) => props.onHoverColor && props.onHoverColor};
  }
`;
