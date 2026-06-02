import React from "react";
import '../css/Home.css';
import getProducts from '../Products/Products';
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./ProductCard";

function Home(){

    const products = getProducts();

    return(
    <div className="page1">
        <h1>Welcome to Our Store</h1>
        <p>Discover a wide range of products and enjoy a seamless shopping experience.</p>
       <div className="container">
            <h2>Featured Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Home ;