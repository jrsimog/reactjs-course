import React from "react";

import "./TodoSearch.css";
import {TodoContext} from "../TodoContext";
function TodoSearch() {
    const { searchValue, setSearchValue} = React.useContext(TodoContext);
		return (
		<input
			onInput={(event) => setSearchValue(event.target.value)} 
			className="input-search-todo"  
			type="text" 
			placeholder="ingrese un texto aqui"
			value={searchValue}
		/>
		);
}

export default  TodoSearch ;
