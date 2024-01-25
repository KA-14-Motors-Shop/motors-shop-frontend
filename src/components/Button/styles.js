import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  border: ${(props) => `2px solid ${props.borderColor}`};
  color: ${(props) => props.fontColor};
  border-radius: 4px;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
`;
