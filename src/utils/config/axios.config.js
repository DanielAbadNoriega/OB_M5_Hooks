import axios from 'axios';

//Default config fro AXIOS
export default axios.create(
  {
    baseURL: "https://randomuser.me/api",
    responseType: 'json',
    timeout: 6000, //la peticion falla si tarda más de 6s
    
  }
)