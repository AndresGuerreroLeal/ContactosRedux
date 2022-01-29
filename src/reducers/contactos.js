import {
  AGREGAR_CONTACTO,
  ELIMINAR_CONTACTO,
  OBTENER_CONTACTO,
  EDITAR_CONTACTO,
  FILTRO_CONTRACTOS,
  OCULTAR_MODAL,
  MOSTRAR_MODAL,
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
} from "../types";

const initialState = {
  contactos: [],
  contactoEditar: null,
  modal: false,
  contactosFiltrados: [],
  filtro: null,
  mensaje: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_CONTACTO:
      return {
        ...state,
        contactos: [...state.contactos, action.payload],
      };
    case ELIMINAR_CONTACTO:
      return {
        ...state,
        contactos: state.contactos.filter(
          (contacto) => contacto.id !== action.payload
        ),
      };
    case OBTENER_CONTACTO:
      return {
        ...state,
        contactoEditar: action.payload,
      };
    case EDITAR_CONTACTO:
      return {
        ...state,
        contactos: state.contactos.map((contacto) =>
          contacto.id === action.payload.id ? action.payload : contacto
        ),
      };
    case MOSTRAR_MODAL:
      return {
        ...state,
        modal: true,
      };
    case OCULTAR_MODAL:
      return {
        ...state,
        modal: false,
        contactoEditar: null,
      };
    case MOSTRAR_ALERTA:
      return {
        ...state,
        mensaje: action.payload,
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        mensaje: null,
      };
    case FILTRO_CONTRACTOS:
      return {
        ...state,
        contactosFiltrados: state.contactos.filter(
          (contacto) => contacto.categoria === action.payload && action.payload
        ),
        filtro: action.payload,
      };
    default:
      return state;
  }
};
