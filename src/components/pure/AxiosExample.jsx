import React, { useState, useEffect } from "react";
import { getRandomUser } from "../../services/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    obtainUser();
  }, []);

  const obtainUser = () => {
    getRandomUser()
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.results[0]);
        }
        console.log(res);
        //console.log(`[ AxiosExample - then ] Response: ${JSON.stringify(res)}`);
      })
      .catch((error) => {
        alert(
          `[ AxiosExample - catch ] Error en la petición: ${error.message}`
        );
      });
  };

  return (
    <div>
      <h1>Axios</h1>
      {user != null ? (
        <div className="card text-center d-flex">
          <img
            className="carg-img-top"
            src={user.picture.large}
            alt={user.name.first}
          />
          <div className="card-body">
            <h3>
              {user.name.title} {user.name.first} {user.name.last}
            </h3>
            <hr></hr>
            <div className="d-flex flex-column text-align-center align-items-center">
              <p className="card-text">
                <span className="fw-bold">Email: </span>
                {user.email}
              </p>
              <p className="card-text">
                <span className="fw-bold">Location: </span>
                {user.location.street.name} {user.location.street.number}
                <br />
                <span className="fw-bold">City:</span> {user.location.city},{" "}
                {user.location.state}, {user.location.country}.
              </p>
              <p className="card-text">
                <span className="fw-bold">Email: </span>
                {user.email}
              </p>
            </div>
          </div>
          <button
            className="btn btn-success mt-2 align-self-center mb-2"
            style={{
              padding: "5px 10px",
              width: "80%",
              "--bs-btn-font-size": "1rem",
            }}
            onClick={() => obtainUser()}
          >
            {" "}
            New User{" "}
          </button>
        </div>
      ) : (
        <div>
          <h2>Generate a new User</h2>
          <button
            className="btn btn-success btn-lg-success mt-2"
            onClick={() => obtainUser()}
          >
            {" "}
            New User{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
