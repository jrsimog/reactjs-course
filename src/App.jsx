import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const defaultTodos =[
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'Un item mas', completed: false },
];
function App() {

	return (
		<>
			<header>
			<CreateTodoButton/>
				<img src={reactLogo} className="react-logo" alt="logo" />
				<img src={viteLogo} className="vite-logo" alt="logo" />
				<TodoCounter completedTodos={2} totalTodos={6}/> <TodoSearch />
			</header>
			<TodoList>
				{ defaultTodos.map(todo => ( <TodoItem text={todo.text} key={todo.text} completed={todo.completed} />)) }
			</TodoList>
		</>
	)
}

export default App
