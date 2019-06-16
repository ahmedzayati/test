// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";

export const Orders = (state = { snack:false,message:"",orders: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ORDERS:
      return { ...state, orders: action.orders };

    // case ActionTypes.ADD_PERSONNEL:
    //   return {
    //     ...state,
    //     personnels: state.personnels.concat(action.personnel)
    //   };

    case ActionTypes.SUCCES_ORDER:
      return {
        ...state,snack:true,message:action.message
      };
      case ActionTypes.CLOSE_SNACK:
      return {
        ...state,snack:false
      };
      case ActionTypes.DELETE_ORDER:
      var x = state.orders.filter(car =>parseInt(car.numCommande) !==parseInt(action.order));
      return {
        ...state,
        orders: x
      };
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
