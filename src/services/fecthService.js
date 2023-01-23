import { async } from "rxjs";

export const getAllUsers = async () => {
  let response = await fetch("https://reqres.in/api/users");
  return response;

/*   console.log("[ getAllUsers ] Response: ", response);
  console.log("[ getAllUsers ] Status: ", response.status);
  console.log("[ getAllUsers ] OK? ->", response.ok); */
  //We return the json data
  //return response.json();
};

export const getAllPagedUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  return response;
};

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  return response;
}