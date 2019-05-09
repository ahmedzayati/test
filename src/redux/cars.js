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
    case ActionTypes.DELETE_CARS:
      console.log(action.Id + "red"); //Id = numVehicule
      var x = state.cars.filter(car => car.numVehicule !== action.Id);
      return {
        ...state,
        cars: x
      };
    case ActionTypes.UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map(car => {
          if (car.numVehicule == action.car.numVehicule) {
            car.nomMarque = action.car.nomMarque;
            car.path = action.car.path;
            car.prix = action.car.prix;
            car.description = action.car.description;
            car.couleur = action.car.couleur;
          }
          return car;
        })
      };
    default:
      return state;
  }
};
