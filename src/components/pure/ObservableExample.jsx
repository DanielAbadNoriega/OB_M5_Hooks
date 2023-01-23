import React, { useState } from "react";
import { getNumbers } from "../../services/observableService";

const ObservableExample = () => {
  const [number, setNumber] = useState(0);

  const obtainNewNumbers = () => {
    console.log("[ ObservableExample ] Subscription to Observable");

    getNumbers.subscribe({
      next(newNumber) {
        console.log("New Number: ", newNumber);
        setNumber(newNumber);
      },
      error(error) {
        alert(`[ ObservableExample ] Something went wrong: ${error}`);
        console.log("Error inobservable.");
      },
      complete() {
        alert(`[ ObservableExample ] Finished with: ${number}`);
        console.log("Done with the observable.");
      },
    });
  };

  return (
    <div className="container">
      <h2>Number: {number}</h2>
      <button
        className="btn btn-success btn-lg-success"
        onClick={() => obtainNewNumbers()}
      >
        {" "}
        Obtain new Numbers{" "}
      </button>
    </div>
  );
};

export default ObservableExample;
