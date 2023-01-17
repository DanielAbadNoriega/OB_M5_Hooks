import React from "react";

import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="text-center">Your Profile</h1>

      <button
        className="btn btn-primary"
        style={{ margin: "5px auto" }}
        onClick={() => goTo("/tasks")}
      >
        Tasks
      </button>
      <button
        className="btn btn-success"
        style={{ margin: "5px auto" }}
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default ProfilePage;
