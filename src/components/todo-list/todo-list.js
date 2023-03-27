import React, { useState, useEffect, useContext, useCallback } from "react";
import { StyleSheet, FlatList, Dimensions, View, Text } from "react-native";
import TodoContext from "../../context/todo/todo-context";
import ScreenContext from "../../context/screen/screen-context";
import TodoItem from "../todo-item";
const TodoList = () => {
	const [device, setDevice] = useState(Dimensions.get("window").width);
	const { todos, removeTodo, fetchTodos, loading } = useContext(TodoContext);
	const { changeScreen } = useContext(ScreenContext);
	const loadTodos = useCallback(async () => {
		await fetchTodos();
	}, [fetchTodos]);
	useEffect(() => {
		loadTodos();
	}, []);

	useEffect(() => {
		const updateWidth = () => {
			setDevice(Dimensions.get("window").width);
		};
		Dimensions.addEventListener("change", updateWidth);
	});
	if (loading) {
		return <Text>Loadiiiing</Text>;
	}
	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={todos}
				renderItem={({ item }) => (
					<TodoItem item={item} removeTodo={removeTodo} onOpen={changeScreen} />
				)}
			/>
			<Text>Width window:{device}</Text>
		</View>
	);
};

export default TodoList;
