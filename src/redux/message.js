import * as ActionTypes from "./ActionTypes";

export const Message = (state = { message: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      console.log(state.message);
      console.log("aa");

      return { ...state, message: action.message };

    case ActionTypes.SEND_MESSAGE:
      return {
        ...state,
        message: state.message.concat({
          corps: action.message.contenu,
          nomClient: action.message.nomClient
        })
      };

    default:
      return state;
  }
};
