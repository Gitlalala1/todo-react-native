import { StyleSheet, Text, View, Alert } from "react-native";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import Navbar from "./src/components/navbar";
import MainScreen from "./src/screens/main-screen";
import TodoScreen from "./src/screens/todo-screen";

async function loadApplication() {
	await Font.loadAsync({
		"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
	});
}

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [todoId, setTodoId] = useState(null);
	const [todos, setTodos] = useState([
		{ id: "1", title: "Drink cofee" },
		{ id: "2", title: "Drink beer" },
	]);
	if (!isReady)
		return (
			<AppLoading
				startAsync={loadApplication}
				onFinish={() => setIsReady(true)}
				onError={(err) => console.log(err)}
			/>
		);

	const addTodo = (title) => {
		const newTodo = {
			id: Date.now().toString(),
			title,
		};
		setTodos((prev) => [...prev, newTodo]);
	};
	const removeTodo = (id) => {
		const itemRemove = todos.find((el) => el.id === id);
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
						setTodoId(null);
						setTodos((prev) => prev.filter((todo) => todo.id !== id));
					},
				},
			],
			{ cancelable: true }
		);
	};
	const onOpen = (itemId) => setTodoId(itemId);
	const goBack = () => setTodoId(null);
	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			onOpen={onOpen}
		/>
	);
	if (todoId) {
		const itemTodo = todos.find((el) => el.id === todoId);
		content = (
			<TodoScreen goBack={goBack} itemTodo={itemTodo} removeTodo={removeTodo} />
		);
	}
	return (
		<View style={styles.container}>
			<Navbar />
			<View style={styles.wrap}>{content}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 200,
	},
	wrap: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
});
