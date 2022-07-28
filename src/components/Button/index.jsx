import { StyledButton } from "./styles";

const Button = ({
  children,
  isBig = true,
  bgColor = "var(--grey-10)", //bgColor = background-color
  fontColor = "var(--grey-0)",
  borderColor = "var(--grey-0)",
  onHoverColor,
  ...rest
}) => {
  return (
    <StyledButton
      isBig={isBig}
      bgColor={bgColor}
      fontColor={fontColor}
      borderColor={borderColor}
      onHoverColor={onHoverColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
