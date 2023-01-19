import React from 'react';
import RegisterFormik from "../../components/pure/forms/registerFormik";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container d-flex flex-column">
      <h1 className='text-center'> Register </h1>
      <hr></hr>
      <RegisterFormik />
      <button
        className="btn btn-primary btn-lg"
        style={{ margin: "2px auto", width: "150px" }}
        onClick={() => goTo("/login")}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}

export default RegisterPage;
