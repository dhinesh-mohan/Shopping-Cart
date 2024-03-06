import React from "react";
import "./CartItems.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = () => {
  const cartList = useSelector((state) => state.cart.itemsList);
  const total = useSelector((state) => state.cart.totalPrice);
  const showCart = useSelector((state) => state.cart.showCart);

  const dispatch = useDispatch();

  const increment = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  const decrement = (product) => {
    dispatch(cartActions.removeFromCart(product.id));
  };

  return (
    <div
      className="cart-main"
      style={{
        visibility: showCart ? "visible" : "hidden",
        transform: showCart ? "translate(0px, 0px)" : "translate(20rem, 0rem)",
      }}
    >
      <div className="cart-container">
        <div className="cart-inner">
          <div className="cart-items">
            {cartList.map((product) => {
              return (
                <div className="cart-item" key={product.id}>
                  <img src={product.image} alt="cart-product" />
                  <div className="details">
                    <h4 className="item-brand">{product.brand}</h4>
                    <div className="item-price">{product.price}</div>
                    <div className="productQty">
                      <button onClick={() => increment(product)}>
                        <AiOutlinePlus />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => decrement(product)}>
                        <AiOutlineMinus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="total-container">
          <p>total</p>
          <h2>${total}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
