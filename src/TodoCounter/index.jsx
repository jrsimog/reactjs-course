import React from "react";
import LoadingTodoCounter from './LoadingTodoCounter';


function TodoCounter({totalTodos, completedTodos}) {
	const allComplete = (totalTodos > 0 && totalTodos == completedTodos) ? true : false;
		return (
			<h2>
			{ allComplete ? `🎉 Felicitaciones completastes ${totalTodos} todos.`: `Has completado ${completedTodos} de ${totalTodos} TODOs`}
		</h2>
		);
}

export default TodoCounter;
