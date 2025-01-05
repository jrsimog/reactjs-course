import React from "react";
import './TodoItem.css';
function TodoItem({text, completed}) {
	const textStatus = completed ? 'completed' : 'incompleted';
		return (
		<li key={text}>
		<span>{completed ? '✔' : '❌'}</span>
		<p className={textStatus}>{text}</p>
			<button className="btn-delete">Eliminar</button>
	</li>		);
}

export default TodoItem;
