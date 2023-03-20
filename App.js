import * as Font from "expo-font";
import { View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import TodoState from "./src/context/todo/todo-state";
import ScreenState from "./src/context/screen/screen-state";
import MainLayout from "./src/MainLayout";
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function loading() {
			try {
				await Font.loadAsync({
					"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
					"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
				});
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				setIsReady(true);
			}
		}

		loading();
	}, []);
	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync();
		}
	}, [isReady]);

	if (!isReady) {
		return null;
	}

	return (
		<View onLayout={onLayoutRootView}>
			<ScreenState>
				<TodoState>
					<MainLayout />
				</TodoState>
			</ScreenState>
		</View>
	);
}
