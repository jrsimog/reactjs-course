import React from "react";
import "./TodoSearch.css";
function TodoSearch() {
		return (
		<input onInput={(event) => console.log(event.target.value)} className="input-search-todo"  type="text" placeholder="ingrese un texto aqui"/>
		);
}

export default  TodoSearch ;
