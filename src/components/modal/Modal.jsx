/* eslint-disable react/prop-types */
import "./modal.css"
const Modal = ({ isOpen, onClose, title = "Modal-title", children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <p>{title}</p>
          <span onClick={onClose} className="close-button">
            &#10006;
          </span>
        </div>
        {children}
        <div className="modal-footer">
          <button className="modbtn" onClick={onClose}>
            OK
          </button>
          <button className="modbtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
