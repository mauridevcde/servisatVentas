
// MONGODB CRUD admFTTH
export function login(form) {

    
	/* let result = new Promise((resolve, reject) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var datos = JSON.stringify(form)
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: datos,
			session: datos,
			redirect: 'follow'
		};
		//console.log("DATOS:", form);
		//guarda datos en el sessionStorage

		fetch("localhost:6053/api/auth/signin", requestOptions)
			.then(response => response.text())
			.then(result => {
				//console.log("RESULT LOGIN", JSON.parse(result));
				sessionStorage.user = result;
				//console.log("GUARDA EN SESSION STORAGED", JSON.parse(sessionStorage.user));
				const token = (result);
				resolve(token);
			})
			.catch(error => console.log('error', error));

	});
	return result; */
}

// LOGOUT FIREBASE
export function logout() {
	let result = sessionStorage.user;
	console.log("el session storage que necesitamos: ", sessionStorage.user);

	sessionStorage.removeItem('user');

	return result;
}