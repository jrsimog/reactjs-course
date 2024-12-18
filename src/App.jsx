import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</>
	)
}

export default App

const TodoItem = () => (
	<li>
		<span>v</span>
		<p>texto</p>
		<span>X</span>
	</li>
);


