import { StyleSheet, Text, View, Alert } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

import Navbar from "./src/components/navbar";
import MainScreen from "./src/screens/main-screen";
import TodoScreen from "./src/screens/todo-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [todoId, setTodoId] = useState(null);
	const [todos, setTodos] = useState([
		{ id: "1", title: "Drink cofee" },
		{ id: "2", title: "Drink beer" },
	]);
	useEffect(() => {
		async function loading() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync({
					"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
					"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
				});
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setIsReady(true);
			}
		}

		loading();
	}, []);
	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [isReady]);

	if (!isReady) {
		return null;
	}

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
		<View style={styles.container} onLayout={onLayoutRootView}>
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
