import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/cardContact.css";


export const CardContact = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const { store, actions } = useContext(Context);
    //const [editingContact, setEditingContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    console.log(contacts)

    let contact = {
        full_name: "",
        email: "",
        agenda_slug: "my_super_agenda",
        address: "",
        phone: "",
        id: ""

    }

    useEffect(() => {
        actions.getData();
    }, []);
    useEffect(() => {
        setContacts(store.contacts); //para guardar el contacto y poder obtener la info en la consola

    }, [store.contacts]);

    if (!store.contacts || store.contacts.length === 0) {
        return <p>No hay contactos disponibles.</p>;
    }

    //eliminar contacto
    const removeContact = async (id) => {

        try {
            const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                method: "DELETE"
            })
            if (!response.ok) {
                throw new Error("No se pudo eliminar el usuario");
            }
            if (response.ok) {
                actions.getData();// Actualizar la lista de contactos después de eliminar
            }
        } catch (error) {

        }
    }






    return (
        <div className="big-container p-5 m-5">
            <h1>Contact List ☏</h1>
            {store.contacts.map((contact, index) => (
                <li key={index} className="list-container list-group-item d-flex justify-content-between align-items-start">
                    <div className="row w-100">
                        <div className="col-4 px-0">
                            <img src={rigoImage} alt="foto" className="rounded-circle mx-auto d-block img-fluid" />
                        </div>

                        <div className=" col-4 info text-center pt-0">
                            <label className="full_name ">😄 <strong>{contact.full_name}</strong></label>
                            <br />
                            <label className="email">📧 {contact.email}</label>
                            <br />
                            <label className="address">🏠 {contact.address}</label>
                            <br />
                            <label className="phone">☎️ {contact.phone}</label>
                        </div>
                        <div className="col-4">
                            <div className="float-end">

                                <button className="btn" ><Link to={"/editContact/" + contact.id} >✏️</Link> </button>

                                <button className="btn" onClick={() => removeContact(contact.id)}>🗑️</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))
            }

        </div>


    )
}

