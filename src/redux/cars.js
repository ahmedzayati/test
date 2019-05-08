import * as ActionTypes from "./ActionTypes";

export const Cars = (state = { cars: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CARS:
      return { ...state, cars: action.cars };
      case ActionTypes.ADD_CAR:
      return {
        ...state,
        cars: state.cars.concat(action.car)
      };
    default:
      return state;
  }
};
