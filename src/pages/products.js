import "./products.css";
import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import tote1 from "../images/tote-1.png";
import tote2 from "../images/tote-6.png";
import straw from "../images/straw.jpeg";
import Product from "../components/Product";


const Products = () => {
  const [openModal, setopenModal] = useState(false);

  const oModal = () => {
    setopenModal(true);
  }

  const cModal = () => {
    setopenModal(false);
  }


  return (
    <>
      <div className="page">
        <div className="content">
          <h1>Products</h1>
          <div className="product-grid">
            <Product name="Pollution Tote Bag" image={tote1} price={10} stock="13" description="Cut down on your waste by using a reusable tote bag. 100% cotton. Design by Steven Liu. Instagram @fastbird288."/>
            <Product name="Recycling Girl Tote" image={tote2} price={10} stock="13" description="Cut down on your waste by using a reusable tote bag. 100% cotton. Design by Colleen Zheng. Instagram @blueebandana."/>
            <Product name={`Reusable Straw and Brush`} image={straw} price={2} stock="4" description="A reusable straw to reduce your plastic use and waste. Comes with a brush to keep clean."/>
          </div>
        </div>
      </div>


    </>
  );
};

export default Products;