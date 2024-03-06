import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const URL = "https://dummyjson.com/products";
  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className="home-container">
      <div className="product-container">
        <div className="products">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div className="product-img">
                  <img src={product.images[0]} alt="Product-Image" />
                </div>
                <div className="product-details">
                  <h4 className="product-name">{product.brand}</h4>
                  <p className="description">{product.description}</p>
                  <div className="price">
                    <span>${product.price}</span>
                    <button className="add" onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
