import React from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  return (
    <>
    <h1>You have ordered:</h1>
    <article>
      
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <div className="cart-item-detail">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <span>Price: Rs.{item.price}</span>
            </div>
          </div>
          
          <div>  
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      
    </article>
    </>
  );
};

export default Cart;
