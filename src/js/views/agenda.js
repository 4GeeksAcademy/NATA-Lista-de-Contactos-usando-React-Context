import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { CardContact } from "../component/CardContact";

export const Agenda = () => {
    const { store } = useContext(Context);
    return(
        <>
        
        <CardContact contacts={store.contact} />
        </>
    )
};