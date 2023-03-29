const handlers = {
	["ADD_TODO"]: (state, { id, title }) => ({
		...state,
		todos: [
			...state.todos,
			{
				id,
				title,
			},
		],
	}),

	["UPDATE_TODO"]: (state, { id, title }) => ({
		...state,
		todos: state.todos.map((todo) => {
			if (todo.id === id) {
				todo.title = title;
			}
			return todo;
		}),
	}),
	["REMOVE_TODO"]: (state, { id }) => ({
		...state,
		todos: state.todos.filter((todo) => todo.id !== id),
	}),

	["FETCH_TODOS_REQUEST"]: (state, action) => ({
		...action.payload,
	}),
	["FETCH_TODOS_SUCCESS"]: (state, action) => ({
		...state,
		todos: action.payload,
		loading: false,
	}),

	["FETCH_TODOS_FAILURE"]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),

	DEFAULT: (state) => state,
};

const TodoReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
};
export default TodoReducer;
