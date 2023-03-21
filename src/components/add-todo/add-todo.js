import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoContext from "./../../context/todo/todo-context";

const AddTodo = () => {
	const [value, setValue] = useState("");
	const { addTodo } = useContext(TodoContext);
	const addItem = () => {
		if (value.trim()) {
			addTodo(value);
			setValue("");
			Keyboard.dismiss();
		} else {
			Alert.alert("Error. Field don't be empty");
		}
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Writing..."
				autoCorrect={false}
				autoCapitalize="words"
			/>
			<AntDesign.Button name="pluscircleo" onPress={addItem}>
				Add
			</AntDesign.Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	input: {
		width: "70%",
		borderStyle: "solid",
		borderBottomWidth: 2,
		borderBottomColor: "#000",
	},
	button: {
		backgroundColor: "red",
		color: "red",
	},
});

export default AddTodo;
