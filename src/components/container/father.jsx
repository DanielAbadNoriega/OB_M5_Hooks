import React, { useState } from "react";
import Child from "../pure/child";
import "../../styles/father.scss";

const Father = () => {
  const [name, setName] = useState("Daniel");

  function updateName(newName) {
    setName(newName);
  }

  return (
    <div className="father-container">
      <h1>Soy el componente padre</h1>
      <h2> Nombre desde el componente hijo: <span>{ name }</span></h2>
      <Child update={updateName} name={name} ></Child>
    </div>
  );
};

export default Father;
