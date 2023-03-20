import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import ModalItemTodo from "../../components/modal-item-todo";
import AppButton from "../../components/ui/app-button";
const TodoScreen = ({ goBack, itemTodo, removeTodo, updateTodo }) => {
	const [modal, setModal] = useState(false);

	return (
		<View>
			<ModalItemTodo
				visible={modal}
				onCancel={() => setModal(false)}
				updateTodo={updateTodo}
				itemTodo={itemTodo}
			/>
			<View style={style.cart}>
				<Text style={style.cart.title}>{itemTodo.title}</Text>
				<View style={style.button}>
					<AppButton onPress={() => setModal(true)} colorBgc="blue">
						Change
					</AppButton>
				</View>
			</View>

			<View style={style.buttons}>
				<View style={style.button}>
					<AppButton onPress={goBack} colorBgc="#757575">
						<AntDesign name="back" size={24} color="#fff" />
					</AppButton>
				</View>
				<View style={style.button}>
					<AppButton onPress={() => removeTodo(itemTodo.id)} colorBgc="red">
						Remove
					</AppButton>
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
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		// width: "30%",
		width:
			Dimensions.get("window").width > 400
				? "30%"
				: Dimensions.get("window").width / 4, //get window/screen
		overflow: "hidden",
		borderRadius: 20,
	},
});

export default TodoScreen;
