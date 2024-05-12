import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../css/breadcrumbs.css';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
    }, [id]);

    return (
        <div className="flex-box">
            {product ?
                <div key={product.id} className="product-box">
                    <div className="product-img">
                        <img
                            className="product-img"
                            src={product.thumbnail}
                            alt=""
                            srcSet=""
                        />
                    </div>
                    <div>{product.title}</div>
                    <div>$ {product.price}</div>
                </div>
                : <p>Loding....</p>}
        </div>
    );
};

export default Product