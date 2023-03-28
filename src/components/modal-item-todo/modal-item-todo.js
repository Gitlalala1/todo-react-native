import React, { useState } from "react";
import { View, Modal, TextInput, Button, StyleSheet } from "react-native";

import AppButton from "../ui/app-button";
const ModalItemTodo = ({ visible, onCancel, itemTodo, updateTodo }) => {
	const [value, setValue] = useState(itemTodo.title);

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={style.modal}>
				<TextInput
					style={style.modal.input}
					autoCapitalize="none"
					autoCorrect={false}
					value={value}
					onChangeText={setValue}
				/>
				<View style={style.modal.buttons}>
					<AppButton
						onPress={() => {
							setValue(itemTodo.title);
							onCancel();
						}}
						colorBgc="red"
						width={"35%"}
					>
						Cancel
					</AppButton>
					<AppButton
						onPress={async () => {
							await updateTodo(itemTodo.id, value);
							onCancel();
						}}
						colorBgc="blue"
						width={"35%"}
					>
						Save
					</AppButton>
				</View>
			</View>
		</Modal>
	);
};
const style = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		input: {
			display: "flex",
			justifyContent: "center",
			width: "80%",
			borderColor: "blue",
			borderWidth: 1,
			borderStyle: "solid",
			paddingHorizontal: 15,
			paddingVertical: 10,
			marginBottom: 10,
		},
		buttons: {
			width: "80%",
			flexDirection: "row",
			justifyContent: "space-between",
		},
	},
});
export default ModalItemTodo;
