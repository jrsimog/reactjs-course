import {React, useState }from "react";

function UseLocalStorage(itemName, initialValue= []){
	let localStorageTodos = JSON.parse(localStorage.getItem(itemName));
	
	let parsedItem;

	if(!localStorageTodos){
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = [];
	}else{
			parsedItem = localStorageTodos;
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = (newItem) =>{
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}
	return [item, saveItem]
}
export default UseLocalStorage;
