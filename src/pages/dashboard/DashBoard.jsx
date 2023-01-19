import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Copyright from "../../components/pure/Copyright";

const DashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <Button variant="contained" onClick={logout}>Logout</Button>

      <Copyright></Copyright>
    </div>
  );
};

export default DashBoard;
