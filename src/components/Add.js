import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostrarModalAction } from "../actions/contactos";

import add from "./images/contacto.png";
import Modal from "./Modal";

const Add = () => {

 const {modal} = useSelector(state => state.contactos)

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(mostrarModalAction());
  };

  return (
    <>
      <img src={add} className="add" onClick={handleModal} />
      {modal && <Modal title="Añadir Contacto" />}
    </>
  );
};

export default Add;
