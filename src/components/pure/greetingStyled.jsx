import React, { useState } from "react";

//Definiendo estilos en constantes

// ? estilo para usuario logueado
const loggedStyle = {
  color: "white",
};

// ? estilo para usuario NO logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  //Generamos un estado para el componente
  //y así controlar si el usuario está o no logueado
  const [isLogged, setIsLogged] = useState(false);

/*   const greetingUser = () => (<p>Hola, {props.name}</p>);
  const pleaseLogin = () => (<p>Please login</p>); */

  return (
    <div style={isLogged ? loggedStyle : unloggedStyle}>
      { isLogged ? 
        (<p>Hola, {props.name}</p>)
        : 
        (<p>Please login</p>)
      }
      <button
        onClick={() => {
          console.log("[ GreetingStyled ]: botón pulsado.");
          setIsLogged(!isLogged);
        }}
      >
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
