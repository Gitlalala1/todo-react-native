import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import TodoReducer from "./todo-reducer";
import TodoContext from "./todo-context";
import ScreenContext from "./../screen/screen-context";
import Http from "../http";

const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
		loading: true,
		error: null,
	};
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	const { changeScreen } = useContext(ScreenContext);
	const service = new Http();

	const addTodo = async (title) => {
		const data = await service.post(title);
		dispatch({ type: "ADD_TODO", title, id: data.name });
	};

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
					onPress: async () => {
						try {
							changeScreen(null);
							await service.delete(itemRemove.id);
							dispatch({ type: "REMOVE_TODO", id: itemRemove.id });
						} catch (error) {
							dispatch({ type: "FETCH_TODOS_FAILURE", payload: error });
						}
					},
				},
			],
			{ cancelable: true }
		);
	};
	const fetchTodos = async () => {
		try {
			const data = await service.get();

			const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
			dispatch({ type: "FETCH_TODOS_REQUEST", payload: initialState });
			dispatch({ type: "FETCH_TODOS_SUCCESS", payload: todos });
		} catch (error) {
			dispatch({ type: "FETCH_TODOS_FAILURE", payload: error });
		}
	};

	const updateTodo = async (id, title) => {
		try {
			await service.update(id, title);
			dispatch({ type: "UPDATE_TODO", id, title });
		} catch (error) {
			dispatch({ type: "FETCH_TODOS_FAILURE", payload: error });
		}
	};

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				loading: state.loading,
				error: state.error,
				addTodo,
				removeTodo,
				updateTodo,
				fetchTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoState;
