import React from "react";

import "./TodoSearch.css";
function TodoSearch({searchValue, setSearchValue}) {
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
