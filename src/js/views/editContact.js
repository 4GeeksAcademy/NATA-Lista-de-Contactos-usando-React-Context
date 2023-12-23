import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/addContact.css"


export const EditContact = () => {
    const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: store.contactToEdit.full_name,
		email: store.contactToEdit.email,
		agenda_slug: "my_super_agenda",
		address: store.contactToEdit.address,
		phone: store.contactToEdit.phone,
        id: store.id
    });

    const handelSubmit = e => {
        e.preventDefault();
        actions.editContact(contact.id, contact); 
    }
    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    

    return(
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
                        onChange={handleChange}  />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="phone" placeholder="Enter phone" name="phone"
						value={contact.phone}
                        onChange={handleChange}  />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="address" placeholder="Enter address" name="address"
						value={contact.address}
                        onChange={handleChange}  />
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
