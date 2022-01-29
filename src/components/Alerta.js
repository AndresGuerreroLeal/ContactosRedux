import React from 'react';
import { useSelector } from 'react-redux';

const Alerta = () => {

    const {mensaje} = useSelector((state)=> state.contactos)

    return <div className={`alerta error`}>{mensaje}</div>;
}
 
export default Alerta;