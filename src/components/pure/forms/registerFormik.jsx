import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Models
//import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  //let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "", //
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username is too short.")
      .max(50, "Username too long.")
      .required("Username is required."),
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role: user / Admin.")
      .required("Role is required."),
    password: Yup.string()
      .min(8, "Password too short.")
      .required("Password is required."),
    /* Para el confirm, aplicamos el ".when()" con la condición de que compruebe el campo de password y como segundo parámetro añadimos las condiciones */
    confirm: Yup.string()
      .when("password", {
        //con la propiedad "is:..." recibimos el valor del campo password ("value"), realizamos la comprobación del valor recibido en "value" con la condición
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          //Una vez validada la condición del "is:...", nos devuelven el "value" y con "oneOf" generamos la lista de condiciones que nos interesan
          [Yup.ref("password")], //Con ".ref" nos referiremos al campo de "password"
          "¡Passwords must match!"
        ),
      })
      .required("You must confirm the password."),
  });

  const submitForm = (values) => {
    alert("[RegisterFormik] Register user\n" + JSON.stringify(values));
    console.log(values);
  };

  /* STYLES */
  const buttonStyle = {
    margin: "2px auto",
    width: "150px",
  };

  return (
    <div>
      <h4 className="text-center m-2">Register Formik</h4>
      <Formik
        initialValues={initialValues}
        // *** Yup Validation Schema ***
        validationSchema={registerSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          submitForm(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="d-flex flex-column flex-lg-column justify-content-center align-items-center gap-2">
            {/* USERNAME */}
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              className="form-control form-control-lg"
            />

            {/* USERNAME ERRORS */}
            {errors.username && touched.username && (
              //<div className="error">
              //<p>{errors.email}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger  fw-bold "
                component="div"
                name="username"
              />
            )}

            {/* EMAIL */}
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              className="form-control form-control-lg"
            />

            {/* EMAIL ERRORS */}
            {errors.email && touched.email && (
              //<div className="error">
              //<p>{errors.email}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger  fw-bold "
                component="div"
                name="email"
              />
            )}

            {/* ROLE */}
            {/* <label htmlFor="role">Role</label>
            <Field component="select" id="role" name="role" multiple={true}>
              <option value={ROLES.ADMIN}>Admin</option>
              <option value={ROLES.USER}>User</option>
            </Field> */}

            {/* PASSWORD */}
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
              autoComplete="on"
              className="form-control form-control-lg"
            />

            {/* PASSWORD ERRORS */}
            {errors.password && touched.password && (
              //<div className="error">
              //<p>{errors.password}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger  fw-bold "
                component="div"
                name="password"
              />
            )}

            {/* CONFIRM PASSWORD */}
            <label htmlFor="confirm" className="form-label">
              Confirm your password
            </label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm your password"
              type="password"
              autoComplete="on"
              className="form-control form-control-lg"
            />

            {/* CONFIRM PASSWORD ERRORS */}
            {errors.confirm && touched.confirm && (
              //<div className="error">
              //<p>{errors.password}</p>
              //</div>

              //Con component="div" el error message estará imbuido en un div
              <ErrorMessage
                className="text-danger fw-bold"
                component="div"
                name="confirm"
              />
            )}
            <button
              type="submit"
              className="btn btn-success btn-lg"
              style={buttonStyle}
            >
              Register
            </button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
