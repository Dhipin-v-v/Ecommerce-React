import React from "react";
import "./ProductList.css";
import { PiCaretDown, PiCaretRight } from "react-icons/pi";
import product1 from "../../assets/images/image 1.png";
import product2 from "../../assets/images/image 2.png";
import product3 from "../../assets/images/image 3.png";
import product4 from "../../assets/images/image 4.png";
import product5 from "../../assets/images/image 5.png";
import product6 from "../../assets/images/image 6.png";
import product7 from "../../assets/images/image 7.png";
import product8 from "../../assets/images/image 8.png";
import { RiStarSFill } from "react-icons/ri";
import ProductItem from "../ProductItem/ProductItem";

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <div className="main-product-list-container">
        <div className="routes">
          <span>Home</span>
          <PiCaretRight size={12} />
          <span>Laptops</span>
          <PiCaretRight size={12} />
          <span>Everyday Use Notebooks</span>
          <PiCaretRight size={12} />
          <span>MSI Prestige Series</span>
          <PiCaretRight size={12} />
          <span>MSI WS Series</span>
        </div>
        <h2>MSI PS Series (20)</h2>
        <div className="products-and-filter-container">
          <div className="filters">Filters</div>
          <div className="products-list">
            <div className="product-list-top-section">
              <span>Items 1-35 of 61</span>
              <div className="btns">
                <div className="dropdown-btn">
                  <span>Sort By: </span>
                  <span>
                    Position <PiCaretDown size={11} />
                  </span>
                </div>
                <div className="dropdown-btn">
                  <span>Show: </span>
                  <span>
                    35 per page <PiCaretDown size={11} />
                  </span>
                </div>
              </div>
            </div>
            <div className="products">
              {products.map((item, i) => (
                <ProductItem item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
