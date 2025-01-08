import React from "react";
import './TodoItem.css';
function TodoItem(props) {
	let {completed, text, onComplete, onDelete} = props;
	const textStatus = completed ? 'completed' : 'incompleted';
		return (
			<li key={text}>
			  <span onClick={onComplete}>{completed ? '✔' : '❌'}</span>
				<p className={textStatus}>{text}</p>
				<button onClick={onDelete} className="btn-delete">Eliminar</button>
			</li>
	);
}

export default TodoItem;
