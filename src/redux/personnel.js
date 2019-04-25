// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";

export const Personnels = (state = { personnels: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSONNELS:
      return { ...state, personnels: action.personnels };

    case ActionTypes.DELETE_PERSONNELS:
    console.log(action.Id+"red")
      var x=state.personnels.filter(per => per.cin !== action.Id)
      return {
        ...state,
        personnels: x
      };
    case ActionTypes.PUSH_PERSONNELS:
      Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        return [
          this.getFullYear(),
          (mm > 9 ? "" : "0") + mm,
          (dd > 9 ? "" : "0") + dd
        ].join("/");
      };
      var currentTime = new Date();
      currentTime.toString();
      return {
        ...state,
        personnels: state.personnels.concat({
          id: parseInt(action.code),
          Name: action.pseudo,
          Position: "Debutant",
          Email: "",
          StartDate: currentTime.yyyymmdd(),
          Age: 18,
          Salary: "$100,750"
        })
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
