import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2>My Product!</h2>
    </>
  );
};
export default Product;
