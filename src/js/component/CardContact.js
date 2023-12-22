import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/cardContact.css";


export const CardContact = () => {
    const { store } = useContext(Context);
    if (!store.contacts || store.contacts.length === 0) {
        return <p>No hay contactos disponibles.</p>;
    }
	const [contact, setContact] = useState({
        full_name: "",
        email: "",
        address:"",
        phone: ""
    })



    return (
        <div> 
             {store.contacts.map((contact, index) => (
                <li key={index} className="list-container list-group-item d-flex justify-content-between align-items-start">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={rigoImage} alt="foto" className="rounded-circle mx-auto d-block img-fluid"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <div className="float-right">
                                <button className="btn-pen"><i className="fa-regular fa-pen-to-square"/></button>
                                <button className="btn-trash"><i className="fa-regular fa-trash-can"></i></button>
                            </div>
                            <label className="full_name">{store.full_name}</label>
                            <br />
                            <label className="email">{contact.email}</label>
                            <br />
                            <label className="address">{contact.address}</label>
                            <br />
                            <label className="phone">{contact.phone}</label>
                        </div>
                    </div>
                </li>
            ))}
         
    </div>
             
        
    )
}