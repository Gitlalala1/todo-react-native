import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoItem from "../todo-item";
const TodoList = ({ todos }) => {
	return (
		<View>
			{todos.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</View>
	);
};

export default TodoList;
