import React from "react";
import '../TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
		return (
		<h1 >
				Has completado {completedTodos} de {totalTodos} TODOs
		</h1>
		);
}

export default TodoCounter;
