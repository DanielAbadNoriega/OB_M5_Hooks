/**
 * Ejemplo de uso del método componentWillUnMount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export default class WillUnMount extends Component {
  componentWillUnmount() {
    console.log(
      "[ componentWillUnMount ]: Comportamiento antes de que el componente desaparezca."
    );
  }

  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    // aqui no escribimos nada
    return () => {
      console.log(
        "UseEffect (componentWillUnMount): Comportamiento antes de que el componente desaparezca."
      );
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  );
};
