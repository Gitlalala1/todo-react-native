import React, { useState } from "react";
import { View, Modal, TextInput, Button, StyleSheet } from "react-native";

const ModalItemTodo = ({ visible, onCancel, itemTodo }) => {
	const [value, setValue] = useState(itemTodo.title);

	return (
		<Modal
			style={style.wrapModal}
			visible={visible}
			animationType="slide"
			transparent={false}
		>
			<View style={style.modal}>
				<TextInput
					style={style.modal.input}
					autoCapitalize="none"
					autoCorrect={false}
					value={value}
					onChangeText={setValue}
				/>
				<View style={[style.modal.btn, style.modal.btn.cancel]}>
					<Button title="Cancel" onPress={onCancel} />
				</View>
				<View style={style.modal.btn}>
					<Button title="Save" />
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
		btn: {
			width: "35%",
			cancel: {
				marginBottom: 15,
			},
		},
	},
});
export default ModalItemTodo;
