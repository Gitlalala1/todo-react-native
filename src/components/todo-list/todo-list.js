import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Dimensions, View, Text } from "react-native";
import TodoItem from "../todo-item";
const TodoList = ({ todos, removeTodo, onOpen }) => {
	const [device, setDevice] = useState(Dimensions.get("window").width);
	useEffect(() => {
		const updateWidth = () => {
			setDevice(Dimensions.get("window").width);
		};
		Dimensions.addEventListener("change", updateWidth);
	});

	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={todos}
				renderItem={({ item }) => (
					<TodoItem item={item} removeTodo={removeTodo} onOpen={onOpen} />
				)}
			/>
			<Text>Width window:{device}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	todoList: {},
});
export default TodoList;
