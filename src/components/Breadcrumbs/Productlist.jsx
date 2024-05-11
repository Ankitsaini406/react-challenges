import React, { useEffect, useState } from "react";
import '../../css/breadcrumbs.css'

const Productlist = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const sliceProduct = res.products.slice(0, 6);
        setProductList(sliceProduct);
      });
  }, []);

  return (
    <div className="flex-box">
        {
            productList.map((product) => {
                return (
                    <div className="product-box">
                        <div className="product-img">
                            <img className="product-img" src={product.images[0]} alt="" srcset="" />
                        </div>
                        <div>
                        {
                            product.title
                        }
                        </div>
                        <div>
                            $ {
                                product.price
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
};

export default Productlist;
