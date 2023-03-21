import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import MainScreen from "./screens/main-screen";
import TodoScreen from "./screens/todo-screen";
import Navbar from "./components/navbar";
import ScreenContext from "./context/screen/screen-context";
const MainLayout = () => {
	const { todoId } = useContext(ScreenContext);
	return (
		<View style={styles.container}>
			<Navbar />
			<View style={styles.wrap}>
				{todoId ? <TodoScreen /> : <MainScreen />}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 200,
	},
	wrap: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
});

export default MainLayout;
