import styled from "styled-components";

export const ProfileIconContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: var(--brand-2);
  font-weight: 700;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey-10);
  cursor: pointer;
  font-size: 16px;
`;
