import { CARS } from "../shared/cars";
import * as ActionTypes from "./ActionTypes";

export const Cars = (state = CARS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CARS:
      return state;

    default:
      return state;
  }
};
