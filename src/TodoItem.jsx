import React from "react";

function TodoItem({text, completed}) {
		return (
		<li key={text}>
		<span>{completed ? '✔' : '❌'}</span>
		<p>{text}</p>
		<button>Eliminar</button>
	</li>		);
}

export default TodoItem;
