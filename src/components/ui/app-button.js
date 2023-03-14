import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

const AppButton = ({ children, onPress, colorBgc, width }) => {
	const Wrapper =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

	return (
		<View style={{ width: width }}>
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
		</View>
	);
};

const style = StyleSheet.create({
	button: {
		borderRadius: 20,

		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		...Platform.select({
			android: { padding: 10 },
			ios: { padding: 13 },
		}),
	},
	txtBtn: {
		color: "#fff",
		fontSize: 17,
	},
});

export default AppButton;
