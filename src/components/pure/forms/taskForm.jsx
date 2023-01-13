import React, { useRef } from "react";
import Proptypes from "prop-types";

//Models
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

//Styles
import "../../../styles/taskForm.scss"

const TaskForm = ({ add, nLength }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4 form-container"
    >
      <div className="form-outline flex-fill">
        <input
          placeholder="Enter the task name"
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg mt-2 mb-2"
          required
          autoFocus
        ></input>
        <input
          placeholder="Enter the task description"
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg mb-2"
          required
        ></input>
        <select
          ref={levelRef}
          id="selectLevel"
          defaultValue={LEVELS.NORMAL}
          className="form-control form-control-lg mb-2 mt-2"
          required
        >
          <option value={LEVELS.NORMAL} className= "normalStyle">Normal</option>
          <option value={LEVELS.URGENT} className="urgentStyle">Urgent</option>
          <option value={LEVELS.BLOCKING} className="blockingStyle">Blocking</option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-3">
          {" "}
          {nLength > 0 ? "Add" : "Create new Task"}{" "}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: Proptypes.func.isRequired,
  nLength: Proptypes.number.isRequired,
};

export default TaskForm;
