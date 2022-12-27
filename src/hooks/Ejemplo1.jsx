/* 
Ejemplo de us del Hook useState

Crear un componente de tipo función y acceder a su estado 
privado a través de un hook y, además, poder modificarlo
*/

import React, { useState } from "react";

const Ejemplo1 = () => {
  //Valor inicial
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: "Daniel",
    email: "daniel.abad.noriega@gmail.com",
  };

  /* 
    Queremos que el VALORINICIAL y PERSONAINICIAL sean
    parte del estado del componente para así poder gestionar su cambio
    y que éste se vea reflejado en la vista del componente.

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
  */
  const [contador, setContador] = useState(valorInicial);

  const [persona, setPersona] = useState(personaInicial);

  /**
   *  Función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }
  /**
   * Function para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Fromen",
      email: "fromen.lordbruck@gmail.com",
    });
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>

      <h2>CONTADOR: { contador }</h2>

      <h2>DATOS DE LA PERSONA: </h2>

      <h3>NOMBRE: { persona.nombre }</h3>

      <h4>EMAIL: { persona.email }</h4>

      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={ incrementarContador } style={{padding: "5 10"}}>Incrementar contador</button>
      <button onClick={ actualizarPersona } style={{ padding: "5 10"}}>Actualizar persona</button>
    </div>
  );
};

export default Ejemplo1;
