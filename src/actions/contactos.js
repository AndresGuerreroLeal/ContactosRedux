import {
  MOSTRAR_MODAL,
  OCULTAR_MODAL,
  FILTRO_CONTRACTOS,
  AGREGAR_CONTACTO,
  ELIMINAR_CONTACTO,
  OBTENER_CONTACTO,
  EDITAR_CONTACTO,
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
} from "../types";

export const agregarContactoAction = (contacto) => (dispatch) => {
  dispatch({ type: AGREGAR_CONTACTO, payload: contacto });
};

export const eliminarContactoAction = (contactoId) => (dispatch) => {
  dispatch({ type: ELIMINAR_CONTACTO, payload: contactoId });
};

export const obtenerContactoEditarAction = (contacto) => (dispatch) => {
  dispatch({ type: OBTENER_CONTACTO, payload: contacto });
};

export const editarContactoAction = (contacto) => (dispatch) => {
  dispatch({ type: EDITAR_CONTACTO, payload: contacto });
};

export const mostrarModalAction = () => (dispatch) => {
  dispatch({ type: MOSTRAR_MODAL });
};

export const ocultarModalAction = () => (dispatch) => {
  dispatch({ type: OCULTAR_MODAL });
};

export const filtrosAction = (filtro) => (dispatch) => {
  dispatch({ type: FILTRO_CONTRACTOS, payload: filtro });
};

export const mostrarAlertaAction = (mensaje) => (dispatch) => {
  dispatch({ type: MOSTRAR_ALERTA, payload: mensaje });

  setTimeout(()=>{
    dispatch({ type: OCULTAR_ALERTA });

  },3000)

};
