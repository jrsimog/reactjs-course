import React from "react";
import './TodoItem.css';
import StatusIcon from "../CompleteIcon";
import { FaTrashCan } from "react-icons/fa6";

function TodoItem(props) {
	let {completed, text, onComplete, onDelete} = props;
	const textStatus = completed ? 'completed' : 'incompleted';
		return (
			<li key={text}>
				<button
				className="btnStatus"
				onClick={onComplete}> 
					<StatusIcon completed={completed}/>
				</button>
				<p className={textStatus}>{text}</p>
				<button 
				onClick={onDelete} 
				className="btn-delete"><FaTrashCan className="btn-delete__svg--trash"/></button>
			</li>
	);
}

export default TodoItem;
