import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  myAge = 31;

  constructor(props) {
    super(props);
    this.state = {
      age: this.myAge,
    };
  }

  render() {
    return (
      <div>
        <h1>!Hola {this.props.name}!</h1>

        <h2>Tu edad es de: {this.state.age}</h2>

        <div>
          {/* Ojo! No aplicar parentesis a las functions llamadas, 
        si no se autoejecutarían! */}
          <button onClick={this.birthday}>Cumpleaños!</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    //setState actualiza el state(el "estado") para que renderice la página.
    //prevState recoge el state anterior
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

//contenido a pasar del componente padre al hijo
Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
