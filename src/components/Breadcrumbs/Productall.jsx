import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/breadcrumbs.css";

const Productall = () => {
  const [productall, setProductAll] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductAll(res.products);
      })
      .catch((error) => {
        console.log(`This is ${error}`);
      });
  }, []);

  return (
    <div className="flex-box">
      {productall.map((product) => {
        return (
          <div key={product.id} className="product-box">
            <Link to={`/product/${product.id}`}>
              <div className="product-img">
                <img
                  className="product-img"
                  src={product.images[0]}
                  alt=""
                  srcSet=""
                />
              </div>
              <div>{product.title}</div>
              <div>$ {product.price}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Productall;
