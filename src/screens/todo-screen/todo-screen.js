import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ModalItemTodo from "../../components/modal-item-todo";

const TodoScreen = ({ goBack, itemTodo, removeTodo }) => {
	const [modal, setModal] = useState(false);

	return (
		<View>
			<ModalItemTodo
				visible={modal}
				onCancel={() => setModal(false)}
				itemTodo={itemTodo}
			/>
			<View style={style.cart}>
				<Text style={style.cart.title}>{itemTodo.title}</Text>
				<View style={style.cart.button}>
					<Button title="Change" onPress={() => setModal(true)} />
				</View>
			</View>

			<View style={style.buttons}>
				<View style={style.button}>
					<Button title="Back" color="#757575" onPress={goBack} />
				</View>
				<View style={style.button}>
					<Button
						title="Remove"
						color="red"
						onPress={() => removeTodo(itemTodo.id)}
					/>
				</View>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	cart: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		padding: 25,
		shadowColor: "#000",
		shadowOffset: { width: 5, height: 14 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 3,
		borderRadius: 5,
		title: {
			width: "60%",
			fontSize: 18,
		},
		button: {
			width: "30%",
		},
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		width: "35%",
		borderRadius: 20,
	},
});

export default TodoScreen;
