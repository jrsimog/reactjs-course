import React from "react";
import LoadingTodoCounter from './LoadingTodoCounter';
import LoadingTodoCounterTitle from './LoadingTodoCounterTitle'


function TodoCounter({totalTodos, completedTodos}) {
	const allComplete = (totalTodos > 0 && totalTodos == completedTodos) ? true : false;
		return (
			<h2>
      {	totalTodos == 0  && <LoadingTodoCounter/> }
      { totalTodos > 0 && (allComplete ? `🎉 Felicitaciones completastes ${totalTodos} todos.`: `Has completado ${completedTodos} de ${totalTodos} TODOs`) }
      </h2>
		);
}

export default TodoCounter;
