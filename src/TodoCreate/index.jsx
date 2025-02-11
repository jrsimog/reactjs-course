import React, { useEffect, useState} from "react";
import { TodoContext } from '../TodoContext'
import './todoCreate.css'

function TodoCreate() {

  const [newTodoValue, setNewTodoValue] = useState('');
  let {
    createTodo,
    showError,
    setShowError,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  useEffect(() =>{
      let button = document.querySelector('.container__btn-create');
      if(newTodoValue.length){
        button.disabled = false;
      }else{
        button.disabled = true;
      }

  },[newTodoValue, openModal]);

  

  const createTodoHandler = () => {
    let value = newTodoValue; 
      setShowError(false);
    if(value && createTodo(value) == false){
      setShowError(true)
    }
    closeModal();
  }

  const btnCreateHandler = (e) =>{
      setNewTodoValue(e.target.value);
  }
  
  const btnCancelHandler = () =>{
          closeModal();
  }

  const closeModal = () =>{
      let input = document.querySelector('.form__input-create');
          input.value = '';
          setOpenModal(false);
    let modalNode = document.querySelector('.modal')
        modalNode.classList.remove("modal--open")
  }

  const submitHandler = (e) => {
    e.preventDefault();
    createTodoHandler();
  }

  return (<>
    <form onSubmit={submitHandler}>
          {
            showError && <span>No se puede crear el todo, ya existe</span>
          }
          <label className="form__label">Crear un todo</label>
      <textarea onInput={btnCreateHandler} className="form__input-create"></textarea>
          <div className="container__btn">
            <button className="container__btn-cancel" onClick={()=>btnCancelHandler()}>Cancelar</button>  
            <button className="container__btn-create" type="submit" disabled={true}>Crear</button>
          </div>
    </form>
  </>);
}

export default TodoCreate;
