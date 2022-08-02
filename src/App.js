import GlobalStyle from "./styles/global";
import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeHeader username={"Junior Testing"} isLoggedIn={false} />
    </>
  );
}

export default App;
