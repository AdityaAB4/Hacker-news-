/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageSearch from "./NewsSearch";
import Heading from "./Heading";
import Card from "./Card";
import Loader from "react-loader-spinner";
const NewsHome = () => {
  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchNews();
  }, [term]);
  const fetchNews = () => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${term}`)
      .then((res) => {
        console.log(res);
        setNews(res.data.hits);
        setIsLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Heading />

      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && news.length === 0 && (
        <h1 className="text-6xl text-center mx-auto">No News Found...</h1>
      )}
      {isLoading ? (
        <>
          {" "}
          <div>
            <Loader
              className="flex justify-center"
              type="Bars"
              color="#34d399"
              height={50}
              width={50}
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="item-container">
            {news.map((news_item) => (
              <Card key={news_item.objectID}>
                <div className="card" key={news_item.objectID}>
                  <h3>{news_item.title}</h3>
                  <Link to={`/news_item/${news_item.objectID}`}>
                    <span className="text-green-400 hover:text-green-600">
                      {" "}
                      View{" "}
                    </span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default NewsHome;
