import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

const AppButton = ({ children, onPress, colorBgc }) => {
	const Wrapper =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

	return (
		<Wrapper onPress={onPress} activeOpacity={0.7}>
			<View
				style={{
					...style.button,
					backgroundColor: colorBgc,
				}}
			>
				<Text style={style.txtBtn}>{children}</Text>
			</View>
		</Wrapper>
	);
};

const style = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		...Platform.select({
			android: { padding: 10 },
			ios: { padding: 15 },
		}),
	},
	txtBtn: {
		color: "#fff",
		fontSize: 17,
	},
});

export default AppButton;
