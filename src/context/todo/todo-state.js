import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import TodoReducer from "./todo-reducer";
import TodoContext from "./todo-context";
import ScreenContext from "./../screen/screen-context";

const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
		loading: true,
		error: null,
	};
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	const { changeScreen } = useContext(ScreenContext);

	const addTodo = async (title) => {
		const res = await fetch(
			"https://todo-react-native-f0345-default-rtdb.firebaseio.com/todos.json",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title }),
			}
		);
		const data = await res.json();

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
						changeScreen(null);
						await fetch(
							`https://todo-react-native-f0345-default-rtdb.firebaseio.com/todos/${itemRemove.id}.json`,
							{
								method: "DELETE",
								headers: { "Content-Type": "application/json" },
							}
						).catch((e) =>
							dispatch({ type: "FETCH_TODOS_FAILURE", payload: e })
						);
						dispatch({ type: "REMOVE_TODO", id: itemRemove.id });
					},
				},
			],
			{ cancelable: true }
		);
	};
	const fetchTodos = async () => {
		try {
			const res = await fetch(
				"https://todo-react-native-f0345-default-rtdb.firebaseio.com/todos.json"
			);

			const data = await res.json();
			const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
			dispatch({ type: "FETCH_TODOS_REQUEST", payload: todos });
			dispatch({ type: "FETCH_TODOS_SUCCESS" });
		} catch (error) {
			dispatch({ type: "FETCH_TODOS_FAILURE", payload: error });
		}
	};

	const updateTodo = async (id, title) => {
		await fetch(
			`https://todo-react-native-f0345-default-rtdb.firebaseio.com/todos/${id}.json`,
			{
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title }),
			}
		).catch((e) => dispatch({ type: "FETCH_TODOS_FAILURE", payload: e }));

		dispatch({ type: "UPDATE_TODO", id, title });
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
