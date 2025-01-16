import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";

// const defaultTodos =[
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'Un item mas', completed: fa wlse },
// 	{ text: 'Un item ma  ws', completed: true},
// ];
//
// localStorage.setItem(itemName, JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue= []){
	let localStorageTodos = JSON.parse(localStorage.getItem(itemName));
	
	let parsedItem;

	if(!localStorageTodos){
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = [];
	}else{
			parsedItem = localStorageTodos;
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = (newItem) =>{
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}
	return [item, saveItem]
}

function App() {


	const [todos, saveTodos] = useLocalStorage('TODOS_V1');
	const [searchValue, setSearchValue] = useState("");
	const completedTD = todos.filter(todo => !!todo.completed).length;


	const  searchedTodo  = todos.filter(todo => todo.text.trim().toUpperCase().includes(searchValue.trim().toUpperCase()));

	const completeTodos = (text) =>{
		const newTodos = [... todos];
		let  todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() == text.trim().toLowerCase());

		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	};

	const deleteTodos = (text) =>{
		const newTodos = [... todos];
		let  todoIndex = newTodos.findIndex(todo => todo.text.trim().toLowerCase() == text.trim().toLowerCase());
		newTodos.splice(todoIndex,1)	
		saveTodos(newTodos);
	 };



	return (

		<>
			<header>
			<CreateTodoButton/>
				<img src={reactLogo} className="react-logo" alt="logo" />
				<img src={viteLogo} className="vite-logo" alt="logo" />
			
			<TodoCounter completedTodos={completedTD} totalTodos={todos.length}/> 
			<TodoSearch 
					searchValue={searchValue}
					setSearchValue={setSearchValue} 
				/>
			</header>
			<TodoList>
				{ searchedTodo.map(todo => (
					<TodoItem 
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={()=> completeTodos(todo.text)}
						onDelete={() => deleteTodos(todo.text)}
				/>)) }
			</TodoList>
		</>
	)
}

export default App
