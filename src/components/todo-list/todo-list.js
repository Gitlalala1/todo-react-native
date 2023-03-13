import React from "react";
import { StyleSheet, FlatList } from "react-native";
import TodoItem from "../todo-item";
const TodoList = ({ todos, removeTodo, onOpen }) => {
	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={todos}
			renderItem={({ item }) => (
				<TodoItem item={item} removeTodo={removeTodo} onOpen={onOpen} />
			)}
		/>
	);
};

const style = StyleSheet.create({
	todoList: {},
});
export default TodoList;
