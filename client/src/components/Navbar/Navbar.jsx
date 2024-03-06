import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-inner">
        <FaShoppingCart size={35} />
        <div className="cart">
          <BsCart3 size={25} />
          <div className="count">
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
