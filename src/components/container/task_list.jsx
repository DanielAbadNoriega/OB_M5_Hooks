import React, { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  
    const defaultTask = new Task(
      "Example",
      "Default description",
      false,
      LEVELS.NORMAL
    );

  const [tasks, setTasks] = useState(defaultTask);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar el estado de la tarea");
  }

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista de tareas */}
      <TaskComponent task={ defaultTask }></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
