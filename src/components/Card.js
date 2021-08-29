import React from "react";

const Card = ({ children }) => {
  return (
    <div className=" mx-2 mr-2 rounded overflow-hidden shadow-lg  md:mx-auto lg:mx-auto max-w-2xl w-full">
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
