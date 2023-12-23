import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/addContact.css"


export const EditContact = () => {
	//buscar el usuario x el id, cargar los datos con el useefect


	console.log("entre a la funcion")
	const { id } = useParams(); // Obtener el ID de la URL
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({

		full_name: store.full_name,
		email: store.email,
		agenda_slug: "my_super_agenda",
		address: store.address,
		phone: store.phone,
		id: id
	});

	const handelSubmit = async (e) => {
		console.log("handleSubmit")
		e.preventDefault();
	//action.editContact(contact, id)

		try {
			
			const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(contact)
			})
			if (!response.ok) {
				console.log("No se pudo editar el usuario");
			}
			if (response.ok) {
				//setContact()
				console.log("editado")
			}
			else {

				handleChange(e);
			}

			actions.getData();
		} catch (error) {
			console.error(error)
			//handleChange(e);
		}
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
		/*  setContact({ ...contact, [e.target.name]: e.target.value, [e.target.email]: e.target.value,
			 [e.target.phone]: e.target.value, [e.target.address]: e.target.value  }); */
	};


	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Edit contact</h1>

				<form onSubmit={handelSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="full_name" placeholder="Full Name" name="full_name"
							value={contact.full_name}
							onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="email" placeholder="Enter email" name="email"
							value={contact.email}
							onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="phone" placeholder="Enter phone" name="phone"
							value={contact.phone}
							onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="address" placeholder="Enter address" name="address"
							value={contact.address}
							onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-primary form-control" >
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/Agenda">
						back to Agenda
					</Link>
				</form>

			</div>
		</div>

	);
};
