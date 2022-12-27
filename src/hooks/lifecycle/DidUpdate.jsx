/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "[ componentDidUpdate ]: Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado."
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  /* Usar useEffect sin los corchetes ("[]") equivale a que se ejecute todas las veces */
  useEffect(() => {
    console.log(
      "UseEffect (DidUpdate): Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado."
    );
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
