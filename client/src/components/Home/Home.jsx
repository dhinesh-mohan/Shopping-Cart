import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="product-container">
        <div className="products">
          <div className="product">
            <div className="product-img">
              <img
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="product-details">
              <h4 className="product-name">Apple</h4>
              <p className="description">Description</p>
              <div className="price">
                <span>$9999</span>
                <button className="add">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
