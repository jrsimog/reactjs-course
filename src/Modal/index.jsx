import React, {useEffect} from "react";
import ReactDom from "react-dom";
import './modal.css'
import {TodoContext} from "../TodoContext";
function Modal({children}) {

  let modalNode = document.querySelector(".modal");
  let {
    openModal
  } = React.useContext(TodoContext);
  useEffect(()=>{
     if(openModal){
        modalNode.classList.add("modal--open")
      }else{
        modalNode.classList.remove("modal--open")
      }
  },[openModal]); 

  return ReactDom.createPortal(
    <>
        <div className="modal__content">
          <button className="modal__close">&times;</button>
          {children}
        </div>
    </>
    , modalNode)
  
}

export default Modal;
