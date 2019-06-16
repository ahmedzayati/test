import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import jwt from "jsonwebtoken";

export const addClient = client => ({
  type: ActionTypes.ADD_CLIENTS,
  client: client
});
export const addClients = clients => ({
  type: ActionTypes.ADD_CLIENTS,
  clients: clients
});

export const fetchClients = () => dispatch => {
  return axios.get("http://localhost:3000/api/users").then(response => {
    dispatch(addClients(response.data));
    console.log(response.data);
  });
};

export const deleteClient = id => ({
  type: ActionTypes.DELETE_CLIENT,
  Id: id
});
export const deleteClients = id => dispatch => {
  return axios
    .delete(`http://localhost:3000/api/users/${id}`)
    .then(response => dispatch(deleteClient(id)))
    .catch(function(error) {
      console.log(error);
    });
};

export const addCars = cars => ({
  type: ActionTypes.ADD_CARS,
  cars: cars
});

export const fetchCars = () => dispatch => {
  return axios.get("http://localhost:3000/api/cars").then(response => {
    dispatch(addCars(response.data));
    console.log(addCars(response.data));
  });
};
export const deleteCars = id => ({
  type: ActionTypes.DELETE_CARS,
  Id: id
});
export const deleteCar = id => dispatch => {
  return axios
    .delete(`http://localhost:3000/api/cars/${id}`)
    .then(response => dispatch(deleteCars(id)))
    .catch(function(error) {
      console.log(error);
    });
};
export const upCar = car => ({
  type: ActionTypes.UPDATE_CAR,
  car: car
});
export const updateCar = carData => dispatch => {
  return axios.put("http://localhost:3000/api/cars", carData).then(response => {
    dispatch(upCar(response.data));
  });
};

export const addPersonnels = personnels => ({
  type: ActionTypes.ADD_PERSONNELS,
  personnels: personnels
});

export const addPersonnel = personnel => ({
  type: ActionTypes.ADD_PERSONNEL,
  personnel: personnel
});
export const addCar = car => ({
  type: ActionTypes.ADD_CAR,
  car: car
});
export const upPersonnel = personnel => ({
  type: ActionTypes.UPDATE_PERSONNEL,
  personnel: personnel
});

export const pushPersonnels = (code, pseudo) => ({
  //addition
  type: ActionTypes.PUSH_PERSONNELS,
  code: code,
  pseudo: pseudo
});

export const alterPersonnels = (id, salary, position) => ({
  //addition
  type: ActionTypes.ALTER_PERSONNELS,
  Id: id,
  Salary: salary,
  Position: position
});

export const deletePersonnels = id => ({
  type: ActionTypes.DELETE_PERSONNELS,
  Id: id
});
export const deletePersonnel = id => dispatch => {
  return axios
    .delete(`http://localhost:3000/api/personnels/${id}`)
    .then(response => dispatch(deletePersonnels(id)))
    .catch(function(error) {
      console.log(error);
    });
};
export const setError = error => ({
  type: ActionTypes.SET_ERROR,
  payload: error
});
export const userSignup = (userData, history) => dispatch => {
  return axios
    .post("http://localhost:3000/api/users", userData)
    .then(function(response) {
      history.push("/home");
    })
    .catch(function(error) {
      dispatch(setError(error.response.data));

      console.log(error.response.data);
    });
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(token);
  } else delete axios.defaults.headers.common["Authorization"];
};
export const setUser = user => ({
  type: ActionTypes.SET_USER,
  payload: user
});
export const rmUser = user => ({
  type: ActionTypes.RM_USER,
  payload: user
});
export const login = (userData, h) => dispatch => {
  return axios
    .post("http://localhost:3000/api/auth", userData)
    .then()
    .then(function(response) {
      const token = response.data.token;
      localStorage.setItem("jwToken", token);
      setAuthToken(token);
      dispatch(setUser(jwt.decode(token)));
      h.push("/account");
      console.log(jwt.decode(token));
    });
};
export const logout = (h) => dispatch => {
  localStorage.removeItem("jwToken");
  setAuthToken(false);
  h.push("/home");
  dispatch(rmUser({}));
};
export const setAdmin = user => ({
  type: ActionTypes.SET_ADMIN,
  payload: user
});
export const loginAdmin = (userData, h) => dispatch => {
  return axios
    .post("http://localhost:3000/api/admin", userData)
    .then(function(response) {
      const token = response.data.token;
      localStorage.setItem("jwToken", token);
      setAuthToken(token);
      dispatch(setAdmin(jwt.decode(token)));
      h.push("/admin");
    });

  // .catch(function(error) {
  //   console.log(error);
  //   h.push("loginAdmin");
  // });
};

export const fetchPersonnels = () => dispatch => {
  return axios.get("http://localhost:3000/api/personnels").then(response => {
    dispatch(addPersonnels(response.data));
    console.log("fetch");
  });
};

export const fetchOrdersByCliens = data => dispatch => {
  return axios.get(`http://localhost:3000/api/order/${data}`).then(response => {
    dispatch(addClientOrders(response.data));
    console.log("fetch ordd");
  });
};
export const addClientOrders = orders => ({
  type: ActionTypes.ADD_CLIENT_ORDERS,
  orders: orders
});
export const addOrders = orders => ({
  type: ActionTypes.ADD_ORDERS,
  orders: orders
});
export const fetchOrders = () => dispatch => {
  return axios.get("http://localhost:3000/api/order").then(response => {
    dispatch(addOrders(response.data));
    console.log("fetch");
  });
};
export const UpConfirm = numCommande => ({
  type: ActionTypes.COMFIRM_ORDER,
  numCommande: numCommande
});
export const UpDecline = numCommande => ({
  type: ActionTypes.DECLINE_ORDER,
  numCommande: numCommande
});

// export const confirmOrder = numCommande => dispatch => {
//   return axios
//     .put("http://localhost:3000/api/order", numCommande)
//     .then(response => {
//       dispatch(UpConfirm(response.data));
//       console.log(response.data);
//     });
// };
export const confirmOrder = numCommande => dispatch => {
  return axios
    .put(`http://localhost:3000/api/order/confirm/${numCommande}`)
    .then(response => dispatch(UpConfirm(numCommande)));
};

export const declineOrder = numCommande => dispatch => {
  return axios
    .put(`http://localhost:3000/api/order/decline/${numCommande}`)
    .then(response => dispatch(UpDecline(numCommande)));
};

export const postPersonnel = personnelData => dispatch => {
  return axios
    .post("http://localhost:3000/api/personnels", personnelData)
    .then(response => {
      dispatch(addPersonnel(response.data));
      dispatch(successOrder("PERSONNEL ADDED WITH SUCCESS"))

    });
};

export const updatePersonnel = personnelData => dispatch => {
  return axios
    .put("http://localhost:3000/api/personnels", personnelData)
    .then(response => {
      dispatch(upPersonnel(response.data));
    });
};
export const postProduct = productData => dispatch => {
  return axios
    .post("http://localhost:3000/api/cars", productData)
    .then(response => {
      dispatch(addCar(response.data));
      dispatch(successOrder("CAR ADDED WITH SUCCESS"))

    });
};

export const postCommand = productData => dispatch => {
  return axios
    .post("http://localhost:3000/api/order", productData)
    .then(response => {
      dispatch(successOrder("YOUR ORDER HAD BEEN PASSED WITH SUCCESS"))
    });
};
export const fetchForum=() => dispatch => {
  return axios
    .get("http://localhost:3000/api/forum")
    .then(response => {
        dispatch(addForum(response.data))
        console.log(response.data)
    });}
    export const addForum = forum => ({
      type: ActionTypes.ADD_FORUM,
      forum: forum
    });


    export const addComment = comment => ({
      type: ActionTypes.ADD_COMMENT,
      comment: comment
    });
   
        export const postComment = (a, b) => dispatch => {
          var user=jwt.decode(localStorage.getItem('jwToken'));
          return axios
            .post("http://localhost:3000/api/forum", {codePublication:a,contenu:b,cinClient:user.cin,nomClient:user.nomClient})
            .then(function(response) {
              
              dispatch(addComment({codePublication:a,contenu:b,cinClient:user.cin,nomClient:user.nomClient}))
            });
        };

        export const postQuestion = (b) => dispatch => {
          var user=jwt.decode(localStorage.getItem('jwToken'));
          return axios
            .post("http://localhost:3000/api/forum/question", {contenu:b,cinClient:user.cin,nomClient:user.nomClient})
            .then(function(response) {
              
              dispatch(addQuestion({contenu:b,cinClient:user.cin,nomClient:user.nomClient,codePublication:response.data.codePublication}))
            });
        }; 
        

        export const addQuestion = question => ({
          type: ActionTypes.ADD_QUESTION,
          question: question
        });
        export const successOrder=(message)=> ({
          type: ActionTypes.SUCCES_ORDER,
          message:message
        });
        export const closeSnackBar=()=> ({
          type: ActionTypes.CLOSE_SNACK
          
        });
        export const closeSnackBar2 = dispatch => {
          dispatch(closeSnackBar())
        }; 


        export const cancelOrder = (order) => dispatch => {
          return axios
            .delete(`http://localhost:3000/api/order/${order}`)
            .then(function(response) {
                dispatch(deleteOrder(order))
            });
        }; 

        export const deleteOrder=(order)=> ({
          type: ActionTypes.DELETE_ORDER,
          order:order
          
        });