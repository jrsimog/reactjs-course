import React from 'react';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodosLoading from '../TodosLoading';
import TodosError from '../TodosError';
import EmptyTodos from '../EmptyTodos';
import CreateTodoButton from '../CreateTodoButton';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App/index.css'
import { TodoContext } from '../TodoContext'

function AppUI() {
    return (
        <>
            <header>
                <CreateTodoButton />
                <img src={reactLogo} className="react-logo" alt="logo" />
                <img src={viteLogo} className="vite-logo" alt="logo" />
                <TodoCounter />
                <TodoSearch />
            </header>
            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodo,
                    completeTodos,
                    deleteTodos,
                }) => (
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchedTodo.length === 0) && <EmptyTodos />}
                        {searchedTodo.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodos(todo.text)}
                                onDelete={() => deleteTodos(todo.text)}
                            />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
        </>
    );
}

export default AppUI;
