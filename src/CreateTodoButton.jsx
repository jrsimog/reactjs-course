import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
		return (
		<button onClick={(event) => console.log(event.target)} className="btn-add" title="add todo" alt="add todo">+</button>
		);
}

export default  CreateTodoButton;
