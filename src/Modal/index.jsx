import React from "react";
import ReactDom from "react-dom";

function Modal({children}) {
  let modalNode = document.querySelector(".modal-app");
  return ReactDom.createPortal(
    <div className="modal-app">
      {children}
    </div>
    , modalNode)
  
}

export default Modal;
