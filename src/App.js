import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("trees");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Home />

      <div className="">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-6xl text-center mx-auto">No Images Found...</h1>
        )}
        {isLoading ? (
          <div className="justify-center items center flex">
            <div className="animate-pulse mb-72 p-2 w-2 h-2 bg-green-400 rounded-full text-center mx-2"></div>
            <div className="animate-pulse mb-72 p-2 w-2 h-2 bg-green-400 rounded-full text-center mx-2"></div>
            <div className="animate-pulse mb-72 p-2 w-2 h-2 bg-green-400 rounded-full text-center mx-2"></div>
          </div>
        ) : (
          <div className="md:mx-48  lg:grid grid-cols-3 gap-4 mx-16">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
