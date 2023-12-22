import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
                     "full_name": "",
                      "email": "",
                      "agenda_slug": "agenda_nat",
                      "address":"",
                      "phone":""
    })
    const handelSubmit = (e) => {
		console.log("contact creado33333")
		e.preventDefault();
		actions.addContact(contact);
		setContact({
			"full_name": "",
			"email": "",
			"agenda_slug": "agenda_nat",
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
						<input type="text" className="full_name" placeholder="Full Name" name="full_name" value={store.contact.full_name}  />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="email" placeholder="Enter email" name="email"  />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="address" placeholder="Enter phone" name="address"  />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="ddress" placeholder="Enter address" name="address"  />
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/Agenda">
						or get back to Agenda
					</Link>
				</form>

            </div>
        </div>

    );
};