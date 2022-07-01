import React from "react";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../Utils/appSlice";

function Modal({ children }) {
    const dispatch = useDispatch();
  return (
    <div className="modal">
        <div className="modal-content">
      <button className="close" onClick={() => dispatch(setModalVisible(false))}>X</button>
      {children}
      </div>
    </div>
  );
}

export default Modal;
