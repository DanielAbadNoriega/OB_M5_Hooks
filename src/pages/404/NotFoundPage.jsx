import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }

  return (
    <div className='container my-2' style={{display:"flex", flexDirection: "column"}}>
      <h1 className='text-center'>404 Not Found</h1>
      <button className="btn btn-primary mx-auto" onClick={() => goTo("/")}>
        Go to Home{" "}
      </button>
    </div>
  );
}

export default NotFoundPage;
