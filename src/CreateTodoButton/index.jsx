import React from "react";
import "./CreateTodoButton.css";
import { FaCirclePlus } from "react-icons/fa6";
import {TodoContext} from "../TodoContext";
function CreateTodoButton() {
    
    let {
      setOpenModal
    } = React.useContext(TodoContext);

		return (
		<button onClick={() => setOpenModal(true)} className="btn-add" title="add todo" alt="add todo"><FaCirclePlus className="btn-add__svg--add"/></button>
		);
}

export default  CreateTodoButton;
