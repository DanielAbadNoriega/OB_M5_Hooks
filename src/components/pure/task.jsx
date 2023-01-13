import React, { useEffect } from "react";
import PropTypes from "prop-types";

//Models
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

//importamos la hoja de stilos de task.scss
import "../../styles/task.scss";

const TaskComponent = ({ task, complete, remove }) => {
  /* Se crea con los [] para que se ejecute una vez por creación */
  useEffect(() => {
    console.log(`UseEffect [ TaskComponent ${task.name} ]: Task created.`);
    return () => {
      console.log(
        `UseEffect return [ TaskComponent ${task.name}]: Task is going to unmount...`
      );
    };
  }, [task]);

  /**
   * Function that returns a Badge
   * depending on the level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  /**
   * function that returns icon depending on completion  of the task
   */
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi bi-toggle2-on"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi bi-toggle2-off"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  return (
    <tr className={`task-container ${task.completed ? "task-completed" : "task-pending"} `}>
      <th>
        {" "}
        <span className="ms-2">{task.name}</span>
      </th>

      <td className="align-middle">
        <span> {task.description}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return badge element */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {/* Execution of function to return icon depending on completion */}
        {taskCompletedIcon()}
        <i onClick={ () => remove()} className="bi bi-trash" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  //Es importante definir el tipo de Prop que vamos a recibir
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
