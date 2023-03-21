import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import AddTodo from "../../components/add-todo";
import TodoList from "../../components/todo-list";
import TodoContext from "../../context/todo/todo-context";
const MainScreen = () => {
	const { todos } = useContext(TodoContext);
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
