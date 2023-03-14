import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ item, removeTodo, onOpen }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => onOpen(item.id)}
			onLongPress={() => removeTodo(item.id)}
		>
			<View style={style.todoItem}>
				<Text style={style.itemText}>{item.title}</Text>
			</View>
		</TouchableOpacity>
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
	itemText: {
		fontFamily: "roboto-regular",
	},
});
export default TodoItem;
