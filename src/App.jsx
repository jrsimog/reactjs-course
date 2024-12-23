import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header>
				<img src={reactLogo} className="react-logo" alt="logo" />
				<img src={viteLogo} className="vite-logo" alt="logo" />
				<h1>TODOs</h1>
			</header>
			<TodoCounter /> <TodoSearch />
			<TodoList>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			</TodoList>
			<CreateTodoButton/>
		</>
	)
}

export default App
