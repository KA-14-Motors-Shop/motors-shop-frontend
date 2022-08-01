import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header username={"Junior Testing"} isLoggedIn={true} />
    </>
  );
}

export default App;
