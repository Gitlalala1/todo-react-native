import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Navbar = () => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>Navbar</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		height: 40,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "blue",
		paddingBottom: 10,
	},
	text: {
		color: "#000",
	},
});

export default Navbar;
