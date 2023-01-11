import React, { useRef, useState, useEffect } from "react";
import "../../styles/child.scss"

const Child = ({ update, name }) => {

  const newName = useRef("");

  let [nameSubmitted, setNameSubmitted] = useState(name);

  useEffect(() => {
    setNameSubmitted(nameSubmitted = `${name} desde el hijo`);
  });

  function updateName(e){
    e.preventDefault();
    update( newName.current.value);
  }


  return (
    <div className="child-container">
      <h2>Soy el componente hijo</h2>
      <h3> Nombre actual: <span>{ nameSubmitted }</span></h3>
      <form onSubmit={updateName}>
        <input
        placeholder="Enter the father's name"
        ref={ newName }
        ></input>
        <button type="submit">Change the name</button>
      </form>
    </div>
  );
};

export default Child;
