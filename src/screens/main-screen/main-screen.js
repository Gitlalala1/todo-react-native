import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AddTodo from "../../components/add-todo";
import TodoList from "../../components/todo-list";
const MainScreen = ({ todos, addTodo, removeTodo, onOpen }) => {
	let content = (
		<TodoList todos={todos} removeTodo={removeTodo} onOpen={onOpen} />
	);
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
			<AddTodo onSubmit={addTodo} />
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
