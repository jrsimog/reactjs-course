import React from "react";
import '../TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
		return (
		<h2>
				Has completado {completedTodos} de {totalTodos} TODOs
		</h2>
		);
}

export default TodoCounter;
