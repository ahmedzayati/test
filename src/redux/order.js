// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";

export const Orders = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ORDERS:
      return { ...state, orders: action.orders };

    // case ActionTypes.ADD_PERSONNEL:
    //   return {
    //     ...state,
    //     personnels: state.personnels.concat(action.personnel)
    //   };

    

    
    default:
      return state;
  }
};
