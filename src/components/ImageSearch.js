import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("cars");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <>
      {/* <div className="  lg:shadow-lg max-w-sm rounded-xl overflow-hidden my-10 mx-auto"> */}
      <form
        onSubmit={onSubmit}
        className="sm:shadow-lg  mt-4  mx-auto mr-auto  lg:  shadow-lg mx-auto my-10 w-max rounded-lg"
      >
        <div className=" flex items-center border-green-300 border-solid border-l-2 border-r-2 border-t-2  border-b-2 rounded-lg  py-2 ">
          <input
            onChange={(e) => setText(e.target.value)}
            className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image here..."
          />
          <button
            className="lg:shadow-md flex-shrink-0 bg-green-400 hover:bg-green-500 border-teal-500 hover:border-teal-700 text-sm border-9 text-white py-2 px-2 rounded-2xl"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {/* </div> */}
    </>
  );
};

export default ImageSearch;
