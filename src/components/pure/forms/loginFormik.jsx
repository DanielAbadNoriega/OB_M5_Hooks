import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  /* STYLES */
  const buttonStyle = {
    margin: "2px auto",
    width: "150px",
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
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save data in the localstorage
          await localStorage.setItem("credentials", values);
          navigate("/profile");
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
            <label className="form-label form-label-lg" htmlFor="email">Email</label>
            <Field
              className="form-control form-control-lg"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              autoComplete="true"
            />

            {/* Email errors */}

            {errors.email && touched.email && (
              //<div className="error">
              //<p>{errors.email}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage className="text-danger fw-bold" component="div" name="email" />
            )}

            <label className="form-label form-label-lg" htmlFor="password">Password</label>
            <Field
              className="form-control form-control-lg"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="true"
            />

            {/* Pasword errors */}

            {errors.password && touched.password && (
              //<div className="error">
              //<p>{errors.password}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage className="text-danger fw-bold" component="div" name="password" />
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={buttonStyle}
            >
              Login
            </button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
