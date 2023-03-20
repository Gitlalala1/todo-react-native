import React, { useReducer } from "react";
import ScreenContext from "./screen-context";
import ScreenReducer from "./screen-reducer";
const ScreenState = ({ children }) => {
	const [state, dispatch] = useReducer(ScreenReducer, null);
	const changeScreen = (id) => dispatch({ type: "CHANGE_SCREEN", payload: id });
	return (
		<ScreenContext.Provider value={{ todoId: state, changeScreen }}>
			{children}
		</ScreenContext.Provider>
	);
};

export default ScreenState;
