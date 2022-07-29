import GlobalStyle from "./styles/global";
import Button from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button
        bgColor="var(--brand-4)"
        fontColor="var(--grey-10)"
        borderColor="var(--grey-10)"
        onHoverColor="var(--brand-1)"
      >
        Big = False
      </Button>
      <Button
        width="300px"
        height="100px"
        fontSize="20px"
        bgColor="var(--brand-4)"
        fontColor="var(--brand-1)"
        borderColor="var(--brand-1)"
        onHoverColor="var(--brand-3)"
      >
        Big = True
      </Button>
    </>
  );
}

export default App;
