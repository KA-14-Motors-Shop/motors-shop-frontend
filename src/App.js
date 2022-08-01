import GlobalStyle from "./styles/global";
import Button from "./components/Button";
import AnuncioModal from "./components/modal";


import {useState} from "react"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [changes, setChanges] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Button
        classname = "teste"
        bgColor="var(--brand-4)"
        fontColor="var(--grey-10)"
        borderColor="var(--grey-10)"
        onHoverColor="var(--brand-1)"
        onClick = {() => {setShowModal(true) }}
        >
        Big = False
      </Button>


      {showModal && (<AnuncioModal
        setShowModal={setShowModal}
        setChanges = {setChanges}
        />)}

    </>
  );
}

export default App;
