import { useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CartItems from "./components/CartItems/CartItems";

function App() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <>
      <Navbar />
      <Home />
      <CartItems />
    </>
  );
}

export default App;
