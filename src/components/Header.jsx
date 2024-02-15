import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import ButtonV2 from "./UI/ButtonV2";

export default function Header() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  const handleShowCart = () => {
    userProgressContext.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food order logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <ButtonV2>TBD</ButtonV2>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems}){" "}
        </Button>
      </nav>
    </header>
  );
}
