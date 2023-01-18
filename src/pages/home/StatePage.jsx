import React from "react";
import { useLocation } from "react-router-dom";

const StatePage = () => {
  //Utilizamos location para acceder a las props desde la query.
  const location = useLocation();

  console.log("[ StatePage ] Location: ", location);
  console.log("[ StatePage ] Location State: ", location.state); //State sent
  console.log("[ StatePage ] Location Params: ", location.search); //Query Params sent

  function getParams() {
    if (location.search) {
      let params;
      if (!location.search.match("&")) {
        params = location.search.split("?").slice(1);
      } else {
        params = location.search.split("?").join("").split("&");
      }
      let i = 0;
      let textParams= "";
      for (i; i < params.length; i++) {
        console.log("[ State Page ] Params For: ", params[i]);
        if(i === params.length-1){
          textParams += `${params[i]}`;
        } else {
           textParams += `${params[i]}, `
        }
      }
      return textParams;
    }
  }

  return (
    <div>
      <h1>
        State:{" "}
        {location.state && location.state.online ? "is online." : "is offline."}
      </h1>
      <h1>
        Query Params:{" "}
        {location.search ? getParams() : "there aren't."}
      </h1>
    </div>
  );
};

export default StatePage;
