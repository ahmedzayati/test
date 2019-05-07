import * as ActionTypes from "./ActionTypes";

export const Cars = (state = { cars: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CARS:
      return { ...state, cars: action.cars };

    default:
      return state;
  }
};
