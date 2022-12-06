import React, { useContext } from "react";
import UserContext from "../../../userContext";
import './style.css';

function Order (props) {
  const { cart, setCart } = useContext(UserContext);

  const classList = ['order-wrapper'];
  if (props.show) {
    classList.push('show');
  }
  const closeOrder = (event) => {
    event.stopPropagation();
    console.log('closeOrder');
    props.close();
  };

  const changeProductCount = (id, value) => {
    console.log('increaseProductCount');
    setCart((prevState) => {
      console.log('setCart');
      const { products } = prevState;
      const product = products.find(el => el.id === id);
      product.count += value;
      if (product.count == 0) {
        return {
          products: products.filter(e => e.id != id)
        };
      }
      return {
        products
      };
    });
  };

  const removeItem = (id) => {
    setCart((prevState) => {
      return {
        products: prevState.products.filter(e => e.id != id)
      };
    });
  };

  return (
    <div className={classList.join(' ')} onClick={closeOrder}>
      <div className="order" onClick={(event) => event.stopPropagation()} >
        {
          cart.products.map((product, i) => {
            return (
              <div>
                {i + 1}:{product.title}
                <div className="row margin-10">
                  <div
                    className="change-count"
                    onClick={() => changeProductCount(product.id, -1)}>
                    -</div>{product.count}
                  <div
                    className="change-count"
                    onClick={() => changeProductCount(product.id, 1)}>
                    +</div>
                </div>
                <div onClick={() => removeItem(product.id)}>remove item</div></div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Order;