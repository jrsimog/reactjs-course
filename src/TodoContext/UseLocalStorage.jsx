import {React, useEffect, useState }from "react";
function UseLocalStorage(itemName, initialValue= []){
	
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(()=>{
		setTimeout(()=>{
					try {
						let localStorageTodos = JSON.parse(localStorage.getItem(itemName));
						let parsedItem;
						if(!localStorageTodos){
								localStorage.setItem(itemName, JSON.stringify(initialValue));
								parsedItem = initialValue; 
						}else{
								parsedItem = localStorageTodos;
								setItem(parsedItem);	
						}
						setLoading(false);
				} catch (error) {
						setLoading(false);
						setError(true);
				}
		}, 1000);
	}, []);

	const saveItem = (newItem) =>{
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}

	return {
		item,
		saveItem,
		loading,
		error
	}
}
export default UseLocalStorage;
