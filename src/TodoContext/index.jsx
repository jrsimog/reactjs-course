import React, { useState } from 'react';
import useLocalStorage from './UseLocalStorage'

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1');
    const [showError, setShowError] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodo = todos.filter(todo => todo.text.trim().toUpperCase().includes(searchValue.trim().toUpperCase()));

    const completeTodos = (text) => {
        const newTodos = [...todos];
        let todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() === text.trim().toLowerCase());

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodos = (text) => {
        const newTodos = [...todos];
        let todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() == text.trim().toLowerCase());
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

  const createTodo = (text) => {
    const newTodos  = [... todos];
    let result = true; 
    let todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() === text.trim().toLowerCase());
    
    if(todoIndex < 0){
      result = false;
    }else{
      let newTodo = {
        text:text,
        completed: false
      }
      newTodos.push(newTodo);
      saveTodos(newTodos);
    }

    return result;    
  }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodos,
            deleteTodos, 
            openModal,
            setOpenModal,
            createTodo,
            showError,
            setShowError
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
