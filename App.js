import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Navbar from "./src/navbar";
import AddTodo from "./src/add-todo";
import TodoList from "./src/todo-list";
export default function App() {
	const [todos, setTodos] = useState([]);
	const addTodo = (title) => {
		const newTodo = {
			id: Date.now().toString(),
			title,
		};
		setTodos((prev) => [...prev, newTodo]);
	};
	return (
		<View style={styles.container}>
			<Navbar />
			<View style={styles.wrap}>
				<AddTodo onSubmit={addTodo} />
				<TodoList todos={todos} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	wrap: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
});
