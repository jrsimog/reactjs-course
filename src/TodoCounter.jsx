import React from "react";
import '../TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
		const allComplete = (totalTodos == completedTodos) ? true : false;
		console.log(completedTodos);
		return (
		<h2>
			{ allComplete ? `🎉 Felicitaciones completastes ${totalTodos} todos.`: `Has completado ${completedTodos} de ${totalTodos} TODOs`}
		</h2>
		);
}

export default TodoCounter;
