import './Modal.css'
import { Link } from 'react-router'

const Modal = () => {
  return (
    <div className="modal">
        <div className="modal-content">
            <Link to="/nuevoContacto" className="modal-item">Agregar contacto</Link>
        </div>
    </div>
  )
}

export default Modal