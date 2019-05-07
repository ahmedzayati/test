import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import jwt from "jsonwebtoken";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory({ forceRefresh: true });

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

export const addPersonnels = personnels => ({
  type: ActionTypes.ADD_PERSONNELS,
  personnels: personnels
});

export const addPersonnel = personnel => ({
  type: ActionTypes.ADD_PERSONNEL,
  personnel: personnel
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
export const userSignup = (userData, history) => dispatch => {
  return axios
    .post("http://localhost:3000/api/users", userData)
    .then(function(response) {
      history.push("/home");
    })
    .catch(function(error) {
      console.log(error);
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
export const login = userData => dispatch => {
  return axios
    .post("http://localhost:3000/api/auth", userData)
    .then()
    .then(function(response) {
      const token = response.data.token;
      localStorage.setItem("jwToken", token);
      setAuthToken(token);
      dispatch(setUser(jwt.decode(token)));
      console.log(jwt.decode(token));
    });
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
    })

    .catch(function(error) {
      console.log(error);
      h.push("home");
    });
};

export const fetchPersonnels = () => dispatch => {
  return axios.get("http://localhost:3000/api/personnels").then(response => {
    dispatch(addPersonnels(response.data));
    console.log("fetch");
  });
};

export const postPersonnel = personnelData => dispatch => {
  return axios
    .post("http://localhost:3000/api/personnels", personnelData)
    .then(response => {
      dispatch(addPersonnel(response.data));
    });
};

export const updatePersonnel = personnelData => dispatch => {
  return axios
    .put("http://localhost:3000/api/personnels", personnelData)
    .then(response => {
      dispatch(upPersonnel(response.data));
    });
};
