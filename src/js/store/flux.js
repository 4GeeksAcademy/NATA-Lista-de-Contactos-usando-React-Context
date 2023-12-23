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
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda")
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
			/* addidDelete: id => {
				setStore({ idDelete: id });
			}, */
			

			removeContact: async (id) => {

				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE"
					})
					if (!response.ok) {
						throw new Error("No se pudo eliminar el usuario");
					}
					if (response.ok){
					actions.getData();// Actualizar la lista de contactos después de eliminar
					}
					
		
				} catch (error) {
		
				}
			},
			editContact: async (contact, id) => {
				console.log("editContactFlux")
				try{
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact" + id, {
						method: "PUT",
						headers:  { "Content-Type": "application/json" },
						body: JSON.stringify(contact)
					})
					if (!response.ok) {
						throw new Error("No se pudo editar el usuario");
					}
					if (response.ok){
					actions.getData();// Actualizar la lista de contactos después de eliminar
					}
				} catch(error){}
			},



			getContact: contact => {
				setStore({ contactToEdit: contact });
			}
			
			}
	}
}

export default getState;
