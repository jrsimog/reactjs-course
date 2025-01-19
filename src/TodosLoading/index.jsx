import React from "react";
import './TodosLoading.css';
function	TodosLoading() {
	return (
		<>
			<div className="parrafoLoading">
					<p className="parrafoLoading__loading">
							<span className="parrafoLoading__loading--item"></span>
							<span className="parrafoLoading__loading--item parrafoLoading__loading--text"></span>
							<span className="parrafoLoading__loading--item"></span>
					</p>
			</div>
			<div className="parrafoLoading">
					<p className="parrafoLoading__loading">
							<span className="parrafoLoading__loading--item"></span>
							<span className="parrafoLoading__loading--item parrafoLoading__loading--text"></span>
							<span className="parrafoLoading__loading--item"></span>
					</p>
			</div>
			<div className="parrafoLoading">
					<p className="parrafoLoading__loading">
							<span className="parrafoLoading__loading--item"></span>
							<span className="parrafoLoading__loading--item parrafoLoading__loading--text"></span>
							<span className="parrafoLoading__loading--item"></span>
					</p>
			</div>
		</>
	)
}

export default TodosLoading;
