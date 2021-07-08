import React from "react";
import "../index.css";

const Home = (props) => {
  
  return (
    <>
      <section className=" sm:bg-no-repeat bg-gradient-to-r from-green-400 via-green-500 to-green-600  h-96 w-full  border-2   lg:bg-no-repeat bg-gradient-to-r from-green-300 via-green-500 to-green-600  h-96 w-full  border-2 ">
        <div className="row py-lg-5">
          <div className="lg:font-lato  text-center text-6xl uppercase my-36 content-center bg-clip-text text-transparent bg-gradient-to-r from-green-100   to-green-200">
            <span className="xsm:my-32  lg:font-lato animate-pulse text-center text-6xl uppercase my-40 content-center bg-clip-text text-transparent bg-gradient-to-r from-green-100   to-green-200">
              AB|Images
            </span>
            <p className="font-lato  text-center text-sm  my-2 content-center bg-clip-text text-white ">
              Popular Images: nature, wallpaper, background, summer, food,
              beach, sky, flower, music, money, cat, dog, flowers,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
