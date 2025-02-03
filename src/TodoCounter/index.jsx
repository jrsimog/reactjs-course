import React from "react";
import LoadingTodoCounterTitle from './LoadingTodoCounterTitle'
import {TodoContext} from "../TodoContext";

function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    const allComplete = (totalTodos > 0 && totalTodos === completedTodos);
    const skeletonClass = (totalTodos || completedTodos) ? 'skeleton-transition' : '';

    return (
        <h2 className={skeletonClass}>
            {totalTodos === 0 ? <LoadingTodoCounterTitle /> : (
                allComplete ? `🎉 Felicitaciones completastes ${totalTodos} todos.` : `Has completado ${completedTodos} de ${totalTodos} TODOs`
            )}
        </h2>
    );
}

export default TodoCounter;
