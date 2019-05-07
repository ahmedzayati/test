// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";

export const Personnels = (state = { personnels: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSONNELS:
      return { ...state, personnels: action.personnels };

    case ActionTypes.ADD_PERSONNEL:
      return {
        ...state,
        personnels: state.personnels.concat(action.personnel)
      };

    case ActionTypes.UPDATE_PERSONNEL:
      return {
        ...state,
        personnels: state.personnels.map(personnel => {
          if (personnel.cin == action.personnel.cin) {
            personnel.salaire = action.personnel.salaire;
            personnel.nomPersonnel = action.personnel.nomPersonnel;
            personnel.telephone = action.personnel.telephone;
            personnel.prenomPersonnel = action.personnel.nomPersonnel;
            personnel.position = action.personnel.position;
            personnel.adresse = action.personnel.adresse;
          }
          return personnel;
        })
      };

    case ActionTypes.DELETE_PERSONNELS:
      console.log(action.Id + "red");
      var x = state.personnels.filter(per => per.cin !== action.Id);
      return {
        ...state,
        personnels: x
      };

    case ActionTypes.ALTER_PERSONNELS:
      console.log(state.personnels);
      return {
        ...state,
        personnels: state.personnels.map(personnel => {
          if (personnel.id == action.Id) {
            personnel.Salary = action.Salary;
            personnel.id = action.Id;
            personnel.Position = action.Position;
          }
          return personnel;
        })
      };
    default:
      return state;
  }
};
