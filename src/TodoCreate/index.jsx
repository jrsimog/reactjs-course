import React from "react";
import { TodoContext } from '../TodoContext'


function TodoCreate() {

  let {
    createTodo,
    showError,
    setShowError,
  } = React.useContext(TodoContext);

  const createTodoHandler = () => {
    let input = document.querySelector('.input-create');
    let value = input.value;
      setShowError(false);
    if(value && createTodo(value) == false){
      setShowError(true)
    }

    if(!showError && value){
      input.value = '';
    
  }

  const btnCreateHandler = () =>{
      let input = document.querySelector('.input-create');
      let button = document.querySelector('.btn-create');
      let value = input.value;
      if(value){
        button.disabled = false;
      }else{
        button.disabled = true;
      }
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
          <input onInput={btnCreateHandler} type="text" className="input-create" />
          <button className="btn-create" type="submit" disabled>Crear</button>
    </form>
  </>);
}

export default TodoCreate;
