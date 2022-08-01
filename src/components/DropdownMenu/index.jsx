import { DDownMenuContainer } from "./styles";

const DropdownMenu = ({ top, bottom, left, right, isActive, children }) => {
  return (
    <DDownMenuContainer
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      isActive={isActive}
    >
      {children}
    </DDownMenuContainer>
  );
};

export default DropdownMenu;
