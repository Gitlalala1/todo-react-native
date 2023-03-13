import React, { useState } from "react";

import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState("");
	const addItem = () => {
		if (value.trim()) {
			onSubmit(value);
			setValue("");
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
			<Button style={styles.button} title="Add" onPress={addItem} />
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
