import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AppButton = ({ children, onPress, colorBgc, width }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.7}
			style={{ width: width }}
		>
			<View style={{ ...style.button, backgroundColor: colorBgc }}>
				<Text style={style.txt}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	button: {
		borderRadius: 20,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	txt: {
		color: "#fff",
		fontSize: 17,
	},
});

export default AppButton;
