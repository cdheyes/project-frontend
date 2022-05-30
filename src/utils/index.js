export const fetchImages = async (setter) => {
	try {
		const response = await fetch("https://picsum.photos/v2/list");
		const data = await response.json();
		setter(data);
	} catch (error) {
		console.log(error);
	}
};

export const signUp = async (username, email, password, setter) => {
	try {
		//response = "res" from req/res
		const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		});
		const data = await response.json();
		setter(data.user.username);
	} catch (error) {
		console.log(error);
	}
};

export const logIn = async (username, password, setter) => {
	try {
		//response = "res" from req/res
		const response = await fetch(
			`${process.env.REACT_APP_REST_API}user/login`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			}
		);
		const data = await response.json();
		setter(data.user.username);
	} catch (error) {
		console.log(error);
	}
};

// filter cuisine function
export const fetchCuisine = async (searchTerm, setter) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_REST_API}rest/${searchTerm}`);
		const data = await res.json();
		setter(data.restaurants);
	} catch (error) {
		console.log(error);
	}
	
 }
