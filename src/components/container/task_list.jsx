import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

//importamos los estilos de task.scss
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example 2",
    "Description 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example 3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log(
      "UseEffect [ TaskListComponent ]: Task State has been modified."
    );
    setLoading(false);
    return () => {
      console.log(
        "UseEffect return [ TaskListComponent ]: TaskList is going to unmount..."
      );
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this Task: ", task);
    //Localizamos la task correspondiente con el indice
    const index = tasks.indexOf(task);

    //Traemos temporalmente todas las tareas para luego aplicarlas en el state
    const tempTasks = [...tasks];

    //Cambiamos la propiedad "completed"
    tempTasks[index].completed = !tempTasks[index].completed;

    //We update the state of the component with the new list of tasks (tempTasks) and it will update the
    //iteration of the tasks in order to show the task updated
    setTasks(tempTasks);
  }

  function removeTask(task) {
    console.log("Delete Task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task){
    console.log("Add Task: ", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card header(title) */}
          <div className="card-header p-3">
            <h5> Your Tasks:</h5>
          </div>
          {/* Card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* ! Important => cuando se itera se necesita una KEY
                  dar?? error si no se incluye, aplicamos el index como KEY
                */}
                {tasks.map((task, index) => (
                  <TaskComponent
                    key={index}
                    task={task}
                    complete={completeTask}
                    remove={removeTask}
                  ></TaskComponent>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
          <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
