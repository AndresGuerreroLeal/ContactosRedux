import React from "react";

import avatar from "./images/imagen.png";

import Modal from "./Modal";

import basura from "./images/basura.png";
import editar from "./images/editar.png";
import {
  eliminarContactoAction,
  mostrarModalAction,
  obtenerContactoEditarAction,
} from "../actions/contactos";
import { useDispatch } from "react-redux";

const Contacto = ({ contacto }) => {
  const dispatch = useDispatch();

  const handleEditar = () => {
    dispatch(obtenerContactoEditarAction(contacto));
    dispatch(mostrarModalAction());
  };

  return (
    <>
      <div className="list">
        <div className="imgBx">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="content">
          <div className="info">
            <h4>{contacto.nombre}</h4>
            <small className="categoria">{contacto.categoria}</small>
          </div>
          <small>Cargo: {contacto.cargo}</small>
          <small>Numero: {contacto.numero}</small>
        </div>
        <div className="options">
          <img src={editar} onClick={() => handleEditar(contacto)} />
          <img
            src={basura}
            onClick={() => dispatch(eliminarContactoAction(contacto.id))}
          />
        </div>
      </div>
    </>
  );
};

export default Contacto;
