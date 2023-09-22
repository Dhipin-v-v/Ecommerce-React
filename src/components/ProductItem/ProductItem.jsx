import React from "react";
import { RiStarSFill } from "react-icons/ri";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="in-stock">
        <span>✔</span>In stock
      </div>
      <img src={item} alt="" />
      <div className="review">
        <div className="stars">
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
          <RiStarSFill className="star-icon" />
        </div>
        <span>Reviews (4)</span>
      </div>
      <span className="title">
        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
      </span>
      <span className="old-price">$599.00</span>
      <span className="price">$499.00</span>
    </div>
  );
};

export default ProductItem;
