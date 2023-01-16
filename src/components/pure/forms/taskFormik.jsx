import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//MODELS
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

//STYLES
import "../../../styles/taskForm.scss";

const TaskFormik = ({ add, nLength }) => {
  //Generamos el esquema de validación
  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "The task name is too short.")
      .required("The task name is required."),
    description: Yup.string()
      .min(6, "The task description is too short.")
      .required("The task description is required."),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
        "You must select a task level: normal, urgent or blocking."
      )
      .required("You must select one task level."),
    completed: Yup.string().oneOf(
      [true, false],
      "You must select completed / uncompleted task"
    ),
  });

  //Generamos los valores iniciales del formulario
  const initialValues = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
    completed: false,
  };

  //TODO the function to create a new Task
  function addTask(values) {
    let newTask = new Task(values.name, values.description, values.level, false);
    add(newTask);
  }

  return (
    <div>
      <h2>New Task Formik</h2>
      <Formik
        //Initial values
        initialValues={initialValues}
        //Validating Schema
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          addTask(values);
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
          <Form className="container d-flex justify-content-center align-items-center mb-4 form-formik-container">
            {/* NAME */}
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              type="name"
              name="name"
              placeholder="Name task"
              className="form-control form-control-lg mb-2 text-center"
            />

            {/* NAME ERRORS */}
            {errors.name && touched.name && (
              <ErrorMessage component="div" name="name" />
            )}

            {/* DESCRIPTION */}
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              type="description"
              name="description"
              placeholder="Name task."
              className="form-control form-control-lg mb-2 text-center"
            />

            {/* DESCRIPTION ERRORS */}
            {errors.description && touched.description && (
              <ErrorMessage component="div" name="description" />
            )}

            {/* LEVEL */}
            <label htmlFor="level">Level</label>
            <Field
              id="level"
              as="select"
              name="level"
              className="form-control form-control-lg mb-2 mt-2 text-center"
            >
              <option value={LEVELS.NORMAL}>NORMAL</option>
              <option value={LEVELS.URGENT}>URGENT</option>
              <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </Field>

            {/* LEVEL ERRORS */}
            {errors.level && touched.level && (
              <ErrorMessage component="div" name="level" />
            )}

            <button type="submit" className="btn btn-success">
              {nLength > 0 ? "ADD" : "Create new Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
