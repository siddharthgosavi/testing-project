import React, { memo } from "react";

const Hello = ({ onClick }) => {
  console.log("Render => <Hello />");
  return (
    <button onClick={onClick} className="btn btn-secondary mx-auto">
      Hello!
    </button>
  );
};

export default memo(Hello);
