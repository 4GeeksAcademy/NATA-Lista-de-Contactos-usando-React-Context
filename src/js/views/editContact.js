import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/addContact.css"


export const EditContact = () => {
	console.log("entre al componente")
	const { id } = useParams(); // Obtener el ID de la URL
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "my_super_agenda",
		address: "",
		phone: "",
		id: id
	});

	useEffect(() => {
		const fetchContact = async () => {
			try {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
				if(!response.ok){
					throw new Error("no carga el contactp")
				}
				const data = await response.json()
				setContact({
					full_name: data.full_name,
					email: data.email,
					agenda_slug: data.agenda_slug,
					address: data.address,
					phone: data.phone,
					id: id
				})
			}catch(error){
				console.error(error)
			}
		}
		fetchContact();
	}, [id]);

	const handelSubmit = async (e) => {
		console.log("handleSubmit")
		e.preventDefault();

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
				console.log("editado")
				// Mostrar alerta SweetAlert al editar con éxito
                Swal.fire({
                    icon: 'success',
                    title: 'User edited successfully!',
                   // showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    //cancelButtonColor: '#d33',
                    confirmButtonText: 'Go to Agenda'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Redireccionar a '/Agenda' al confirmar la alerta
                        window.location.href = '/Agenda';
                    }
				})
			}
			//actions.getData()
		} catch (error) {
			console.error(error)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
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
