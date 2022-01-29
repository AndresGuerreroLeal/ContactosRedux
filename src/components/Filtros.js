import React from "react";
import { useDispatch } from "react-redux";
import { filtrosAction } from "../actions/contactos";

const Filtros = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filtrosAction(e.target.value));
  };

  return (
    <>
      <select onChange={handleChange}>
        <option value="">Seleccione Categoria</option>
        <option value="familia">Familia</option>
        <option value="trabajo">Trabajo</option>
        <option value="amigos">Amigos</option>
        <option value="pareja">Pareja</option>
        <option value="mejoramigo">Mejor Amigo</option>
        <option value="mejoramiga">Mejor Amiga</option>
      </select>
    </>
  );
};

export default Filtros;
