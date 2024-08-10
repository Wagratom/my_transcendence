import { Button, Modal } from "react-bootstrap";
import notAuthorized from "../../../assets/game/notAuthorized.jpg";

export default function ModalNotAuthorized() {
    const onHide = () => {
        window.location.href = "/";
    }

    const cssMainDiv: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: 'auto'
    }
    return (
        <Modal style={cssMainDiv} show={true} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>You don't have permission to use the spaceship, or your permission has expired</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding: "0"}}>
                <div className='d-flex justify-content-center'>
                    <img
                        className='img-fluid'
                        src={notAuthorized}
                        alt="Painel de uma nave espacial com a palavra 'Não Autorizado'. O fundo mostra planetas, estrelas e uma órbita planetária." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Request permission
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
