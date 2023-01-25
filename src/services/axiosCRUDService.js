import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => {
  let body = {
    email,
    password,
  };

  //Returns the response with a Promise
  return axios.post("https://reqres.in/api/login", body);
};

//obtain All Users
export const getAllUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

//obtain All paged users
export const getAllPagedUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

//obtain User by ID
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

//Create User
export const createUser = (name, job) => {
  let body = {
    name,
    job,
  };

  return axios.post("https://reqres.in/api/users", body);
};

//Update User
export const updateUser = (id, name, job) => {
  let body = {
    name,
    job,
  };

  return axios.post(`https://reqres.in/api/users/${id}`, body);
};

//Delete User
export const deleteUserById = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};