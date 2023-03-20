import React, { useReducer } from "react";

import TodoReducer from "./todo-reducer";
import TodoContext from "./todo-context";

const TodoState = ({ children }) => {
	const initialState = {
		todos: [{ id: "1", title: "Drink beer" }],
	};
	const [state, dispatch] = useReducer(TodoReducer, initialState);

	const addTodo = (title) => dispatch({ type: "ADD_TODO", title });
	const removeTodo = (id) => dispatch({ type: "REMOVE_TODO", id });
	const updateTodo = (id, title) =>
		dispatch({ type: "UPDATE_TODO", id, title });
	return (
		<TodoContext.Provider
			value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoState;
