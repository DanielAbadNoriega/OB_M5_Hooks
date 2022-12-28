import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

//importamos la hoja de stilos de task.scss
import "../../styles/task.scss"

const TaskComponent = ({ task }) => {
  /* Se crea con los [] para que se ejecute una vez por creación */
  useEffect(() => {
    console.log(`UseEffect [ TaskComponent ${task.name} ]: Task created.`);
    return () => {
      console.log(
        `UseEffect return [ TaskComponent ${task.name}]: Task is going to unmount...`
      );
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name">Nombre: {task.name}</h2>

      <h3>Descripción: {task.description}</h3>

      <h4>Level: {task.level}</h4>

      <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  //Es importante definir el tipo de Prop que vamos a recibir
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
