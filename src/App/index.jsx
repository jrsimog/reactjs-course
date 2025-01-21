import '../App/index.css'
import { React, useState} from "react";
import useLocalStorage from './UseLocalStorage';
import AppUI  from './AppUI';
// const defaultTodos =[
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'Un item mas', completed: false },
// 	{ text: 'Un item ma  ws', completed: true},
// ];
//
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {


	const {
		item: todos, 
		saveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1');

	const [searchValue, setSearchValue] = useState("");
	const completedTD = todos.filter(todo => !!todo.completed).length;

	const  searchedTodo  = todos.filter(todo => todo.text.trim().toUpperCase().includes(searchValue.trim().toUpperCase()));

	const completeTodos = (text) =>{
		const newTodos = [... todos];
		let  todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() === text.trim().toLowerCase());

		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	};

	const deleteTodos = (text) =>{
		const newTodos = [... todos];
		let  todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() == text.trim().toLowerCase());
		newTodos.splice(todoIndex,1)	
		saveTodos(newTodos);
	 };


	return (<AppUI
			loading={loading}
			error={error}
			completedTodos={completedTD}
			totalTodos={todos.length}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodo={searchedTodo}
			completeTodos={completeTodos}
			deleteTodos={deleteTodos}
	/>)
}

export default App
