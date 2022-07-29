import { StyledButton } from "./styles";

const Button = ({
  children,
  width = "146px",
  height = "48px",
  bgColor = "var(--grey-10)", //bgColor = background-color
  fontColor = "var(--grey-0)",
  fontSize = "16px",
  borderColor = "var(--grey-0)",
  onHoverColor,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      bgColor={bgColor}
      fontColor={fontColor}
      fontSize={fontSize}
      borderColor={borderColor}
      onHoverColor={onHoverColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
