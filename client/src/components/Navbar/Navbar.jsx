import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { cartActions } from "../../store/cartSlice";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <FaShoppingCart size={35} />
        <div className="cart" onClick={showCart}>
          <BsCart3 size={25} />
          <div className="count">
            <span>{quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
