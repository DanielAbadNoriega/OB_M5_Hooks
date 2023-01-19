import React from "react";
import LoginFormik from "../../components/pure/forms/loginFormik";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center mt-1">Login page</h1>
      <LoginFormik></LoginFormik>
      <button
        className="btn btn-success btn-lg"
        style={{ margin: "2px auto", width: "150px" }}
        onClick={() => goTo("/register")}
      >
        {" "}
        Register{" "}
      </button>
    </div>
  );
};

export default LoginPage;
