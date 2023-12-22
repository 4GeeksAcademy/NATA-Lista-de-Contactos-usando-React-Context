import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/addContact.css"

export const AddContact = () => {
    const { store, actions } = useContext(Context);
	
	const [contact, setContact] = useState({
        "full_name": "",
        "email": "",
        "agenda_slug": "my_super_agenda",
        "address":"",
        "phone":""
    })
	
    const handelSubmit = (e) => {
		console.log("contact creado33333")
		e.preventDefault();
		actions.addContact(contact);
		setContact({
			...contact,
			"full_name": "",
			"email": "",
			"agenda_slug": "my_super_agenda",
			"address":"",
			"phone":""
		})
	
	};

    return(
        <div className="container">
            <div>
            <h1 className="text-center mt-5">Add a new contact</h1>

            <form onSubmit={handelSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="full_name" placeholder="Full Name" name="full_name" 
						value={contact.full_name}
						onChange={(e) => setContact({ ...contact, full_name: e.target.value })} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="email" placeholder="Enter email" name="email" 
						value={contact.email}
						onChange={(e) => setContact({ ...contact, email: e.target.value })}  />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="phone" placeholder="Enter phone" name="phone"
						value={contact.phone}
						onChange={(e) => setContact({ ...contact, phone: e.target.value })}   />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="address" placeholder="Enter address" name="address"
						value={contact.address}
						onChange={(e) => setContact({ ...contact, address: e.target.value })}   />
					</div>
					<button type="submit" className="btn btn-primary form-control">
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