import React, { useRef } from "react";
import Proptypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
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
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select
          ref={levelRef}
          id="selectLevel"
          defaultValue={LEVELS.NORMAL}
          className="mt-2"
          required
        >
          <option value={LEVELS.NORMAL}>
            Normal
          </option>
          <option value={LEVELS.URGENT}>
            Urgent
          </option>
          <option value={LEVELS.BLOCKING}>
            Blocking
          </option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-3"> Add </button>
    </form>
  );
};

TaskForm.propTypes = {
  add: Proptypes.func.isRequired,
};

export default TaskForm;
