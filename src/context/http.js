export default class Http {
	src = "https://todo-react-native-f0345-default-rtdb.firebaseio.com/todos";
	todos = ".json";
	header = {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	};

	post = async (title) => {
		const res = await fetch(
			this.src + this.todos,
			(this.header = {
				...this.header,
				method: "POST",
				body: JSON.stringify({ title }),
			})
		);

		if (!res.ok) {
			throw new Error(`Could not fetch , received ${res.status}`);
		}

		return res.json();
	};
	get = async () => {
		const res = await fetch(this.src + this.todos, this.header);
		if (!res.ok) {
			throw new Error(`Could not fetch , received ${res.status}`);
		}
		return res.json();
	};
	update = async (id, title) => {
		const res = await fetch(this.src + "/" + id + this.todos, {
			...this.header,
			method: "PATCH",
			body: JSON.stringify({ title }),
		});
		if (!res.ok) {
			throw new Error(`Could not fetch , received ${res.status}`);
		}
		return res.json();
	};
	delete = async (id) => {
		const res = await fetch(this.src + "/" + id + this.todos, {
			...this.header,
			method: "DELETE",
		});
		if (!res.ok) {
			throw new Error(`Could not fetch , received ${res.status}`);
		}
		return res.json();
	};
}
