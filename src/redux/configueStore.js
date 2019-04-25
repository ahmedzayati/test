import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Cars } from "./cars";
import { Auth } from "./auth";
import { Personnels } from "./personnel";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      cars: Cars,
      auth: Auth,
      personnels: Personnels
    }),
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )  );
  return store;
};
