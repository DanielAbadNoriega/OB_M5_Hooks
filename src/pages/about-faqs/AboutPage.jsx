import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("[ AboutPage ] We are in Route: ", location.pathname);

  const goTo = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <div style={{display:"flex", flexDirection: "column"}}>
      <h1 className="text-center"> About | FAQs Page</h1>
      <button className="btn btn-primary mx-auto mb-2" onClick={() => goTo("/")}>
        Go to Home{" "}
      </button>
      <button className="btn btn-success mx-auto mb-2" onClick={goBack}>
        Go back{" "}
      </button>
      <button className="btn btn-warning mx-auto mb-2" onClick={goForward}>
        Go forward{" "}
      </button>
    </div>
  );
};

export default AboutPage;
