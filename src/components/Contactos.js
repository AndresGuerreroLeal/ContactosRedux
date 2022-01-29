import React from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import Alerta from "./Alerta";
import Contacto from "./Contacto";
import Filtros from "./Filtros";

const Contactos = () => {
  const { contactos, filtro, contactosFiltrados,mensaje } = useSelector(
    (state) => state.contactos
  );



  return (
    <section>
      {mensaje && <Alerta />}

      <div className="box">
        <div className="header">
          <h3>Lista de Contactos</h3>
          <Filtros />
        </div>
        <div className="container__list">
          {!filtro ? (
            !contactos.length ? (
              <p>Inicie agregando un contacto.</p>
            ) : (
              contactos.map((contacto) => (
                <Contacto contacto={contacto} key={contacto.id} />
              ))
            )
          ) : !contactosFiltrados.length ? (
            <p>No se encontro ningun contacto.</p>
          ) : (
            contactosFiltrados.map((contacto) => (
              <Contacto contacto={contacto} key={contacto.id} />
            ))
          )}
        </div>

        <Add />
      </div>
    </section>
  );
};

export default Contactos;
