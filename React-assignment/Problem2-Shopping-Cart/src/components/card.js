import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, description, price, img, priceDisc } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
        <p>Price - Rs.{price} <span>Rs.{priceDisc}</span></p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

