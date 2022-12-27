import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: { task.name }</h2>

      <h3>Descripción: { task.description }</h3>

      <h4>Level: { task.level }</h4>

      <h5>This task is: { task.completed ? "COMPLETED" : "PENDING" }</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  //Es importante definir el tipo de Prop que vamos a recibir
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;