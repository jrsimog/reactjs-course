import React from 'react';
import TodoCounter	from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import CreateTodoButton from '../CreateTodoButton';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App/index.css'

function AppUI({
	loading,
	error,
	completedTodos,
	totalTodos,
	searchValue,
	setSearchValue,
	searchedTodo,
	completeTodos,
	deleteTodos
}) {

		return (
	<>
			<header>
			<CreateTodoButton/>
				<img src={reactLogo} className="react-logo" alt="logo" />
				<img src={viteLogo} className="vite-logo" alt="logo" />
			
			<TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/> 
			<TodoSearch 
					searchValue={searchValue}
					setSearchValue={setSearchValue} 
				/>
			</header>
			<TodoList>
				{ loading && <p>Estamos cargando...</p>}
				{ error && <p>Tenemos un error!!!</p>}
				{(!loading && searchedTodo.length == 0) && <p>!Crea tu primer TODO!</p>}

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
);
}

export default AppUI;
