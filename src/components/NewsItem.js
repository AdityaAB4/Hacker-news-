/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import Card from "./Card";
const NewsItem = ({ match }) => {
  const [data, setData] = useState([]);
  const [comdata, setComData] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/${match.params.id}`)
      .then((res) => {
        setData(res.data);
        setComData(res.data.children);
        console.log(res.data.children);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Heading />
      <Card>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {data.title}
        </h1>
        <h2 className="text-xs text-green-500  font-medium title-font mb-1">
          {data.points}
        </h2>

        {comdata.map((child) => (
          <div key={child.id}>
            <h3 className='text-gray-400'>{child.author}</h3> 
            <div dangerouslySetInnerHTML={{ __html: `${child.text}` }} />
            <br/>
          
          </div>
        ))}
      </Card>
    </>
  );
};
export default NewsItem;
