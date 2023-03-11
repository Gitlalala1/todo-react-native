import React, { useState } from "react";

import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState("");
	const addItem = () => {
		if (value.trim()) {
			onSubmit(value);
			setValue("");
		}
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Writing..."
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
