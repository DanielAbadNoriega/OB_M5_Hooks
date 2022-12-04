import React, {useState} from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  //Para poder utilizar el estado, importamos useState 
  const [age, setage] = useState(31);

  const birthday = () => {
    //Actualizamos el state
    setage(age + 1);
  }

  return (
    <div>
      <h1>!Hola {props.name} desde componente funcional!</h1>

       <h2>Tu edad es de: {age}</h2>

      <div>
        {/* Ojo! No aplicar parentesis a las functions llamadas, 
si no se autoejecutarían! */}
        <button onClick={birthday}>Cumpleaños!</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
