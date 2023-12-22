import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { CardContact } from "../component/CardContact";

export const Agenda = () => {
    const { store } = useContext(Context);
    return(
        <>
        <h1>Contact List ☏</h1>
        <CardContact contacts={store.contact} />
        </>
    )
};