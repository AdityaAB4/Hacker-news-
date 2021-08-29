/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageSearch from "./NewsSearch";
import Heading from "./Heading";
import Card from "./Card";
const NewsHome = () => {
  const [products, setProducts] = useState([]);
    const [term, setTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [term]);
  const fetchProducts = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${term}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Heading />

      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="item-container">
        {products.map((product) => (
          <Card key={product.objectID}>
            <div className="card" key={product.objectID}>
              <h3>{product.title}</h3>
              <Link to={`/product/${product.objectID}`}>View</Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NewsHome;
