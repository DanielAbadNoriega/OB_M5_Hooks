import React, { useEffect } from 'react';

const AllCycles = () => {

  useEffect(() => {
    console.log("UseEffect (AllCycles): Componente actualizado.");

    const intervalID = setInterval(() => { 
      document.title = `${new Date()}`;
      console.log("[ Interval ]: Actualización del componente.")
    }, 1000);
    return () => {
      console.log("UseEffect Return (AllCycles): Componente va a desaparecer.");
      document.title = "Tiempo detenido";
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default AllCycles;
