import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import ModalItemTodo from "../../components/modal-item-todo";
import AppButton from "../../components/ui/app-button";
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
				<AppButton onPress={() => setModal(true)} colorBgc="blue" width={"30%"}>
					Change
				</AppButton>
			</View>

			<View style={style.buttons}>
				<AppButton onPress={goBack} colorBgc="#757575" width={"30%"}>
					<AntDesign name="back" size={24} color="#fff" />
				</AppButton>
				<AppButton
					onPress={() => removeTodo(itemTodo.id)}
					colorBgc="red"
					width={"30%"}
				>
					Remove
				</AppButton>
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
});

export default TodoScreen;
