import Button from "../Button"

import * as yup from "yup"
import * as styles from "./styles"

const AnuncioModal = ({setShowModal, setChanges}) => {

return (

    <div
    className="layer-modal"
    onClick={ () => {
        setShowModal(false);
        setChanges(false);
    }}
    >
    <styles.GenericModal
    onClick={(e)=> e.stopPropagation()}>
        <form>
            <h2>Isso e um h2</h2>
            <input   />
            <h3>Isso e um h3</h3>
            <Button 
                    width="100px"
                    height="30px"
                    fontSize="20px"
                    bgColor="var(--brand-4)"
                    fontColor="var(--brand-1)"
                    borderColor="var(--brand-1)"
                    onHoverColor="var(--brand-3)"> Button </Button>
        </form>
    </styles.GenericModal>
    </div>
)

}



export default AnuncioModal