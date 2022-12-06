import React, { useContext, useState } from "react";
import './style.css';
import cartFull from './imgs/shopping-cart-full.png';
import cartEmpty from './imgs/shopping-cart-empty.png';
import Order from "./order";
import UserContext from "../../userContext";

function Cart () {
 const { cart } = useContext(UserContext);

 const [showCard, setShowCard] = useState(false);

 const openOrder = () => {
  console.log('openOrder');
  setShowCard(true);
 };

 return (
  <div className="cart" onClick={openOrder}>
   <img src={cart.products.length ? cartFull : cartEmpty} alt='' />
   <div className="cart-counter">{cart.products.length}</div>
   <Order show={showCard} close={() => setShowCard(false)} />
  </div>
 );
}

export default Cart;