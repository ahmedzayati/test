import * as ActionTypes from "./ActionTypes";

export const Clients = (state = { clients: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CLIENTS:
      console.log(state.clients);
      return { ...state, clients: action.clients };

    // case ActionTypes.ADD_CLIENT:
    //   return {
    //     ...state,
    //     clients: state.clients.concat(action.client)
    //   };

    // case ActionTypes.UPDATE_PERSONNEL:
    //   return {
    //     ...state,
    //     personnels: state.personnels.map(personnel => {
    //       if (personnel.cin == action.personnel.cin) {
    //         personnel.salaire = action.personnel.salaire;
    //         personnel.nomPersonnel = action.personnel.nomPersonnel;
    //         personnel.telephone = action.personnel.telephone;
    //         personnel.prenomPersonnel = action.personnel.nomPersonnel;
    //         personnel.position = action.personnel.position;
    //         personnel.adresse = action.personnel.adresse;
    //       }
    //       return personnel;
    //     })
    //   };

    case ActionTypes.DELETE_CLIENT:
      console.log(action.Id + "red");
      var x = state.clients.filter(client => client.cin !== action.Id);
      return {
        ...state,
        clients: x
      };

    // case ActionTypes.ALTER_PERSONNELS:
    //   console.log(state.personnels);
    //   return {
    //     ...state,
    //     personnels: state.personnels.map(personnel => {
    //       if (personnel.id == action.Id) {
    //         personnel.Salary = action.Salary;
    //         personnel.id = action.Id;
    //         personnel.Position = action.Position;
    //       }
    //       return personnel;
    //     })
    //   };
    default:
      return state;
  }
};
