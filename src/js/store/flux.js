const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			idDelete: "",
			contactToEdit: {}
		},
		actions: {

			getData: () => {
				console.log("Llamando a getData"); 
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
					.then(res => {
						if (!res.ok) {
							throw Error(res.statusText);
						} 
						return res.json()
					})
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error, "no recibe los datos"));
			},
			addContact: contact => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST", 
					body: JSON.stringify(contact), 
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("creado", response))
					.catch(error => console.error("Error:", error));
			},
			addidDelete: id => {
				setStore({ idDelete: id });
			},
			removeContact: () => {
				const store = getStore();
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda" + store.idDelete, {
					method: "DELETE"
				}).then(res => {
					if (res.ok) {
						getActions().getData();
					}
				});
			},
			editContact: (id, contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(results => console.log(setStore({ contact: results }), "estoy en setStore"))
					.catch(error => console.log("Error", error));
			},
			getContact: contact => {
				setStore({ contactToEdit: contact });
			}
			
		}
	};
};

export default getState;







			// Use getActions to call a function within a fuction
			//exampleFunction: () => {
			//	getActions().changeColor(0, "green");
			//},
			//loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			//},
			//changeColor: (index, color) => {
				//get the store
				//const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
					//if (i === index) elm.background = color;
					//return elm;
				//});

				//reset the global store
				//setStore({ demo: demo });
