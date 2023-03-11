import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TodoItem = ({ item }) => {
	return (
		<View style={style.todoItem}>
			<Text>{item.title}</Text>
		</View>
	);
};
const style = StyleSheet.create({
	todoItem: {
		flexDirection: "row",
		padding: 15,
		borderWidth: 1,
		borderColor: "blue",
		borderRadius: 5,
		marginBottom: 15,
	},
});
export default TodoItem;
