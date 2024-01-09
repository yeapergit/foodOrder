import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartContext = useContext(CartContext);

  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food order logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems}) </Button>
      </nav>
    </header>
  );
}
