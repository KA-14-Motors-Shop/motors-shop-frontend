
import * as styles from "./styles"
import { GrClose } from "react-icons/gr"


const AnuncioModal = ({setShowModal, setChanges}) => {

return (


    <styles.GenericModal>
        <div className="generic-modal">
            <h2>Generic Modal</h2> 
        <GrClose 
            onClick={ () => {
                setShowModal(false);
                setChanges(false);}}/>
        </div>
       
    </styles.GenericModal>
)

}



export default AnuncioModal