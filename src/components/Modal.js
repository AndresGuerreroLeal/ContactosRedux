import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  agregarContactoAction,
  editarContactoAction,
  ocultarModalAction,
  mostrarAlertaAction
} from "../actions/contactos";

import { v4 } from "uuid";

const Modal = ({ title }) => {
  const dispatch = useDispatch();

  const { contactoEditar } = useSelector((state) => state.contactos);

  const [dataForm, setDataForm] = useState({
    nombre: "",
    cargo: "",
    numero: "",
    categoria: "",
  });

  useEffect(() => {
    if (contactoEditar) {
      setDataForm(contactoEditar);
    }
  }, []);

  const { nombre, numero, cargo, categoria } = dataForm;

  const handleModal = () => {
    dispatch(ocultarModalAction());
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(nombre.trim() === "" || numero === "" || cargo.trim() === "" || categoria.trim() === ""){
     return dispatch(mostrarAlertaAction("Todos los campos son obligatorios"));
    }

    if (contactoEditar) {
      dispatch(editarContactoAction(dataForm));
    } else {
      dispatch(
        agregarContactoAction({ ...dataForm, anteguedad: Date.now(), id: v4() })
      );
    }

    setDataForm({
      nombre: "",
      cargo: "",
      numero: "",
      categoria: "",
    });

    dispatch(ocultarModalAction());
  };

  return (
    <>
      <div className="container__modal">
        <div className="modal">
          <div className="titulo__modal">
            <h3>{title}</h3>
            <span onClick={handleModal}>X</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                value={nombre}
              />
            </div>
            <div>
              <label>Cargo</label>
              <input
                type="text"
                name="cargo"
                onChange={handleChange}
                value={cargo}
              />
            </div>
            <div>
              <label>Numero</label>
              <input
                type="number"
                name="numero"
                onChange={handleChange}
                value={numero}
              />
            </div>
            <div>
              <label>Categoria</label>
              <select onChange={handleChange} value={categoria} name="categoria">
                <option value="">--Seleccione Categoria--</option>
                <option value="familia">Familia</option>
                <option value="trabajo">Trabajo</option>
                <option value="amigos">Amigos</option>
                <option value="pareja">Pareja</option>
                <option value="mejoramigo">Mejor Amigo</option>
                <option value="mejoramiga">Mejor Amiga</option>
              </select>
            </div>

            <div>
              <input type="submit" value="añadir contacto" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
