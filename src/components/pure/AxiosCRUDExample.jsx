import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  login,
  getAllUsers,
  getAllPagedUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
} from "../../services/axiosCRUDService";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const AxiosCRUDExample = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          console.log("[ authUser ] Response : ", response.data);
          /* console.log(JSON.stringify(response)); */
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("[ authUser ] Login failure.");
        }
      })
      .catch((error) => {
        console.error(`[ authUser ] Error en la peticion: ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.error("[ authUser ] Login done."));
  };

  /* CRUD EXAMPLES */

  /* GET */
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("[ obtainAllUsers ] Response: ", response.data.data);
      })
      .catch((error) => {
        console.error(`[ obtainAllUsers ] Response error: ${error}`);
      });
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log("[ obtainAllPagedUsers ] Response: ", response.data.data);
      })
      .catch((error) => {
        console.error(`[ obtainAllPagedUsers ] Response error: ${error}`);
      });
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        console.table(response.data.data);
      })
      .catch((error) =>
        console.error(`[ obtainUserById ] Response error: ${error}`)
      );
  };

  /* CREATE */
  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          console.table(response.data);
        } else {
          throw new Error(`[ createNewUser ] Error creating new user`);
        }
      })
      .catch((error) =>
        console.error(`[ createNewUser ] Response error: ${error}`)
      );
  };

  /* UPDATE */
  const updateUserById = (id, name, job) => {
    updateUser(id, name, job)
      .then((response) => {
        console.log("[ updateUserById ] Response:")
        console.table(response.data);
      })
      .catch((error) =>
        console.error(`[ updateUserById ] Response error: ${error}`)
      );
  };

  /* DELETE */
  const deleteUser = (id) => {
    deleteUserById(id)
      .then((response) => {
        console.log("[ deleteUser ] Response: ", response.status);
      })
      .catch((error) =>
        console.error(`[ deleteUser ] Response error: ${error}`)
      );
  };

  return (
    <div>
      <h2 className="text-center">Login Formik</h2>
      <hr></hr>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
          authUser(values);
        }}
      >
        {/* We obtain props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="d-flex flex-column justify-content-center align-items-center gap-2">
            <label className="form-label form-label-lg" htmlFor="email">
              Email
            </label>
            <Field
              className="form-control form-control-lg"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              autoComplete="false"
            />

            {/* Email errors */}

            {errors.email && touched.email && (
              //<div className="error">
              //<p>{errors.email}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger fw-bold"
                component="div"
                name="email"
              />
            )}

            <label className="form-label form-label-lg" htmlFor="password">
              Password
            </label>
            <Field
              className="form-control form-control-lg"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="false"
            />

            {/* Pasword errors */}

            {errors.password && touched.password && (
              //<div className="error">
              //<p>{errors.password}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger fw-bold"
                component="div"
                name="password"
              />
            )}

            <button
              type="submit"
              className="btn btn-success btn-lg"
              onClick={() => authUser()}
            >
              Login
            </button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
      {/* EXAMPLE BUTTONS TEST API RESPONSES */}
      <div className="d-flex flex-column">
        <button
          className="btn btn-lg ms-2 my-2"
          style={{ backgroundColor: "lightcyan" }}
          onClick={() => obtainAllUsers()}
        >
          GET ALL USERS AXIOS
        </button>

        <button
          className="btn btn-warning btn-lg ms-2 my-2 text-white"
          onClick={() => obtainAllPagedUsers(1)}
        >
          GET ALL USERS (Page 1) AXIOS
        </button>

        <button
          className="btn btn-lg ms-2 my-2 text-white"
          style={{ backgroundColor: "lightcoral" }}
          onClick={() => obtainUserById(1)}
        >
          GET USER 1 AXIOS
        </button>

        <button
          className="btn btn-lg ms-2 my-2 text-white"
          style={{ backgroundColor: "tomato" }}
          onClick={() => createNewUser("morpheus", "leader")}
        >
          CREATE NEW USER
        </button>

        <button
          className="btn btn-lg ms-2 my-2 text-white"
          style={{ backgroundColor: "gold" }}
          onClick={() => updateUserById("713","Fromen", "Developer")}
        >
          UPDATE NEW USER
        </button>

        <button
          className="btn btn-lg ms-2 my-2 text-white"
          style={{ backgroundColor: "lightblue" }}
          onClick={() => deleteUser("1")}
        >
          DELETE NEW USER
        </button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
