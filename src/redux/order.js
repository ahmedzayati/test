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
    case ActionTypes.COMFIRM_ORDER:
      return {
        ...state,
        orders: state.orders.map(order => {
          if (order.numCommande == action.numCommande) {
            order.etat = "confirm";
          }
          return order;
        })
      };
    case ActionTypes.DECLINE_ORDER:
      return {
        ...state,
        orders: state.orders.map(order => {
          if (order.numCommande == action.numCommande) {
            order.etat = "decline";
          }
          return order;
        })
      };
    default:
      return state;
  }
};
