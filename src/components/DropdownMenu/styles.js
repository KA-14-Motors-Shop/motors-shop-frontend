import styled from "styled-components";

export const DDownMenuContainer = styled.div`
  position: absolute;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  background-color: var(--grey-10);
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
`;
