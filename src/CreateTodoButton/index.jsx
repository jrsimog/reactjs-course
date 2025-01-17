import React from "react";
import "./CreateTodoButton.css";
import { FaCirclePlus } from "react-icons/fa6";
function CreateTodoButton() {
		return (
		<button onClick={(event) => console.log(event.target)} className="btn-add" title="add todo" alt="add todo"><FaCirclePlus className="btn-add__svg--add"/></button>
		);
}

export default  CreateTodoButton;
