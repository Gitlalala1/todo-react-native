import React, { useContext, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import AddTodo from "../../components/add-todo";
import TodoList from "../../components/todo-list";
import TodoContext from "../../context/todo/todo-context";
const MainScreen = () => {
	const { todos, fetchTodos, error, loading } = useContext(TodoContext);

	const loadTodos = useCallback(async () => {
		await fetchTodos();
	}, [fetchTodos]);
	useEffect(() => {
		if (todos.length === 0) loadTodos();
	}, []);

	if (loading) {
		return <Text>Loading. Waiting please...</Text>;
	}
	if (error) {
		console.log("Error:" + error);
		return <Text>Error...</Text>;
	}
	let content = <TodoList />;

	if (todos.length === 0) {
		content = (
			<View style={styles.wrapEmpty}>
				<Image
					style={styles.image}
					source={require("../../../assets/Empty.jpg")}
				/>
			</View>
		);
	}
	return (
		<View>
			<AddTodo />
			{content}
		</View>
	);
};
const styles = StyleSheet.create({
	wrapEmpty: {
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		borderRadius: 15,
	},
});
export default MainScreen;
