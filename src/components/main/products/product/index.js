import React from "react";
import UserContext from "../../userContext";
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {String} props.brand
 * @param {String} props.title
 * @param {String} props.category
 * @param {String} props.description
 * @param {number} props.discountPercentage
 * @param {number} props.id
 * @param {number} props.price
 * @param {number} props.rating
 * @param {number} props.stock
 * @param {string} props.thumbnail
 * @param {string[]} props.images
 * @returns 
 */
function Product (props) {

 const { setCart } = React.useContext(UserContext);

 const addToCart = () => {
  setCart((prevState) => {

   const { products } = prevState;
   const product = products.find(el => el.id === props.id);
   if (product) {
    product.count += 1;
   } else {
    products.push({
     ...props,
     count: 1,
    })
   }
   return { products };
  });
 };

 return (
  <div className="product">
   <div>id:{props.id}</div>
   <div>{props.title}</div>
   <div>category: {props.category}</div>
   <div>price: {props.price}</div>
   <button onClick={addToCart}>Add to cart</button>
  </div>
 );
}

export default Product;