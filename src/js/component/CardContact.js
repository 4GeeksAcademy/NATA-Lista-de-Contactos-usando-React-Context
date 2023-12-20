import React from "react";

export const CardContact = () => {

    return (
        <li className="list-group-items">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="#" alt="foto" className="rounded-circle mx-auto d-block img-fluid"/>
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className=" float-right">
                        <button className="btn"></button>
                        <button className="btn"></button>
                    </div>
                    <label className="name">Nombre</label>                   
                </div>
            </div>
            <h1>AGENDA</h1>

        </li>
    )
}