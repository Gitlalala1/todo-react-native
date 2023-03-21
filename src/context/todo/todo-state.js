import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import TodoReducer from "./todo-reducer";
import TodoContext from "./todo-context";
import ScreenContext from "./../screen/screen-context";

const TodoState = ({ children }) => {
	const initialState = {
		todos: [{ id: "1", title: "Drink beer" }],
	};
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	const { changeScreen } = useContext(ScreenContext);
	const addTodo = (title) => dispatch({ type: "ADD_TODO", title });

	const removeTodo = (id) => {
		const itemRemove = state.todos.find((el) => el.id === id);
		Alert.alert(
			"Remove todo",
			`Are you sure remove "${itemRemove.title}"?`,
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "OK",
					onPress: () => {
						changeScreen(null);
						dispatch({ type: "REMOVE_TODO", id: itemRemove.id });
					},
				},
			],
			{ cancelable: true }
		);
	};

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
