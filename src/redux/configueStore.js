import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Cars } from "./cars";
import { Auth } from "./auth";
import { Personnels } from "./personnel";
import { Orders } from "./order";
import { Clients } from "./clients";

import thunk from "redux-thunk";
import { Forum } from "./forum";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      cars: Cars,
      auth: Auth,
      personnels: Personnels,
      orders: Orders,
      clients: Clients,
      forum:Forum
    }),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
