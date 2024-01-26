import React from "react";
import './modalConfirm.css';
const Modal = ({ show, onClose, onConfirm, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal" style={{ display: "block" }}>
        {children}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary">
            Cancelar
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
