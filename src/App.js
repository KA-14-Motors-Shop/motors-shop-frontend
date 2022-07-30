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
        bgColor="var(--brand-4)"
        fontColor="var(--grey-10)"
        borderColor="var(--grey-10)"
        onHoverColor="var(--brand-1)"
        onClick = {() => {setShowModal(true)}}
      >
        Big = False
      </Button>
      {/* <Button
        width="300px"
        height="100px"
        fontSize="20px"
        bgColor="var(--brand-4)"
        fontColor="var(--brand-1)"
        borderColor="var(--brand-1)"
        onHoverColor="var(--brand-3)"
      >
        Big = True
      </Button> */}

      {showModal && (<AnuncioModal
        setShowModal={setShowModal}
        setChanges = {setChanges}
      />)}

    </>
  );
}

export default App;
