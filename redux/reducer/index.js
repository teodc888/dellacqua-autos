import { GET_AUTOS } from "../actions/actionsType.js";

const inicialState = {
  autos: [],
};

export default  function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_AUTOS:
      return {
        ...state,
        autos: action.payload,
      };
    default:
      return state;
  }
}
