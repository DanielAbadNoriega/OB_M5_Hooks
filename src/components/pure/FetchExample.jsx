import React, { useState, useEffect } from "react";
import {
  getAllPagedUsers,
  getAllUsers,
  getUserDetails,
  login,
} from "../../services/fecthService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    obtainUsers();
  }, []);

  /* ALL USERS */
  const obtainUsers = () => {
    getAllUsers()
      .then((res) => {
        if (res.status === 200 && res.ok) {
          res
            .json()
            .then((body) => {
              console.log(
                "[ FetchExample - obtainUsers ] (.then) All users: ",
                body.data
              );
              setUsers(body.data);
              setTotalUsers(body.total);
              setUsersPerPage(body.per_page);
              setPages(body.total_pages);
            })
            .catch((error) =>
              console.log(
                "[ FetchExample - obtainUsers ] Error while receiving the users: ",
                error.message
              )
            );
        }
      })
      .catch((error) => {
        alert(
          "[ FetchExample - obtainUsers ] Error while receiving the users: ",
          error.message
        );
      })
      .finally(() => {
        console.log("[ FetchExample - obtainUsers ] Ended obtaining users: ");
        console.table(users);
      });
  };

  /* USERS PER PAGE */
  const obtainPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((res) => {
        if (res.status === 200 && res.ok) {
          res
            .json()
            .then((body) => {
              console.log(
                "[ FetchExample - obtainPagedUsers ] (.then) All users: ",
                body.data
              );
              setUsers(body.data);
              setTotalUsers(body.total);
              setUsersPerPage(body.per_page);
              setPages(body.total_pages);
            })
            .catch((error) =>
              console.log(
                "[ FetchExample - obtainPagedUsers ] Error while receiving the users: ",
                error.message
              )
            );
        }
      })
      .catch((error) => {
        alert(
          "[ FetchExample - obtainPagedUsers ] Error while receiving the users: ",
          error.message
        );
      })
      .finally(() => {
        console.log(
          "[ FetchExample - obtainPagedUsers ] Ended obtaining users: "
        );
        console.table(usersPerPage);
      });
  };

  /* SINGLE USER */
  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((res) => {
        if (res.status === 200 && res.ok) {
          res
            .json()
            .then((body) => {
              console.log(
                "[ FetchExample - obtainUserDetails ] (.then) All users details: ",
                body.data
              );
              setSelectedUser(body.data);
            })
            .catch((error) =>
              console.log(
                "[ FetchExample - obtainUserDetails ] Error while receiving the users details: ",
                error.message
              )
            );
        }
      })
      .catch((error) => {
        alert(
          "[ FetchExample - obtainUserDetails ] Error while receiving the users details: ",
          error.message
        );
      })
      .finally(() => {
        console.log(
          "[ FetchExample - obtainUserDetails ] Ended obtaining users: "
        );
        console.table(selectedUser);
      });
  };

  /* LOGIN */
  const authUser = () => {
    let data = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    login(data)
      .then((res) => {
        if (res.status === 200 && res.ok) {
          res
            .json()
            .then((body) => {
              console.log(
                "[ FetchExample - authUser ] (.then) Authentication token: ",
                body.token
              );
              setSelectedUser(body.token);
              console.log(`TOKEN: ${body.token}`);
              sessionStorage.setItem("token", body.token);
            })
            .catch((error) =>
              console.log(
                `[ FetchExample - authUser ] Error authenticating user "${data.email}": `,
                error.message
              )
            );
        }
      })
      .catch((error) => {
        alert(
          "[ FetchExample - authUser ] Error while receiving the users details: ",
          error.message
        );
      })
      .finally(() => {
        console.log("[ FetchExample - authUser ] Ended authentication user.");
        console.table(selectedUser);
      });
  };

  return (
    <div className="container container-lg text-center">
      {/* Button to simulate login */}
      <button
        className="btn btn-success btn-lg-success mb-2"
        onClick={() => authUser()}
      >
        Login
      </button>
      <h2> Users: </h2>
      <div className="container text-start">
        {users.map((user, index) => (
          <p
            key={index}
            className="container"
            style={{ cursor: "pointer" }}
            onClick={() => obtainUserDetails(user.id)}
          >
            <span style={{ fontWeight: "bold" }}>{user.id}. First name:</span>{" "}
            {user.first_name} {user.last_name}.
          </p>
        ))}
      </div>
      <p>
        {" "}
        Showing {usersPerPage} users of {totalUsers} in total.
      </p>

      <button
        className="btn btn-success ms-1 btn-sm"
        onClick={() => obtainPagedUsers(1)}
      >
        {" "}
        1{" "}
      </button>
      <button
        className="btn btn-success ms-1 btn-sm"
        onClick={() => obtainPagedUsers(2)}
      >
        {" "}
        2{" "}
      </button>

      {/* USER CARD */}
      {selectedUser != null ? (
        <div className="card mt-2">
          <img
            src={selectedUser.avatar}
            className="card-img-top"
            alt={selectedUser.first_name}
          ></img>
          <div className="card-body">
            <h3 className="card-title"> User details</h3>
            <hr></hr>
            <p className="cart-text">
              <span className="fw-bold">Name: </span>
              {selectedUser.first_name}
            </p>
            <p className="cart-text">
              <span className="fw-bold">Last Name:</span>{" "}
              {selectedUser.last_name}
            </p>
            <p className="cart-text">
              <span className="fw-bold">Email: </span> {selectedUser.email}
            </p>
          </div>
        </div>
      ) : (
        <h2>Click on an User to see its details</h2>
      )}
    </div>
  );
};

export default FetchExample;
