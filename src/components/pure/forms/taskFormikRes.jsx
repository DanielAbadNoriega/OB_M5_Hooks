import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";
import useList from "../../../hooks/useList";
import "../../../styles/taskForm.scss";

const TaskFormikRes = () => {
  const TaskSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  const defaultTask = {
    name: "Formik",
    description: "Formulario con Formik",
    level: LEVELS.URGENT,
    done: false,
  };
  const tasks = useList([defaultTask]);

  return (
    <div>
      <h2>Task List Res</h2>
      <Formik
        initialValues={{
          name: "",
          description: "",
          level: LEVELS.NORMAL,
          done: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            tasks.push(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={TaskSchema}
      >
        {({ errors }) => (
          <Form className="container d-flex justify-content-center align-items-center mb-4 form-formik-container">
            {/* NAME */}
            <Field
              name="name"
              placeholder="Task Name"
              className="form-control form-control-lg mb-2 text-center"
            />
            {errors && errors.name}

            {/* DESCRIPTION */}
            <Field
              name="description"
              placeholder="Task Description"
              className="form-control form-control-lg mb-2 text-center"
            />
            {errors && errors.description}

            {/* LEVEL */}
            <Field
              as="select"
              name="level"
              className="form-control form-control-lg mb-2 text-center"
            >
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        tasks.value.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              onClick={() => tasks.remove(index)}
              checked={false}
            />
            <p style={{ fontWeight: "bold", marginRight: "5px" }}>
              {task.name}
            </p>
            <p>{task.description}</p>
          </li>
        ))
      )}
    </div>
  );
};

export default TaskFormikRes;
