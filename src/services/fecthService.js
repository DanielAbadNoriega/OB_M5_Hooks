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
};

export const login = async (data) => {
  /* let data = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  }; */

  let response = await fetch(`https://reqres.in/api/login`, {
    method: "POST",
    //mode:"no-cors",
    credentials: "omit",
    cache: "no-cache",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  console.log("[ login ] Response: ", response);
  console.log("[ login ] Status: ", response.status);
  console.log("[ login ] OK? ->", response.ok);
  return response;
};
