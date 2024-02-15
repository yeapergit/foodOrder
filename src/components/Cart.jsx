import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
import ButtonV2 from "./UI/ButtonV2";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  function handleGoToCheckout() {
    userProgressContext.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressContext.progress === "cart"}
      onClose={userProgressContext.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <ButtonV2 onClick={handleCloseCart} textOnly>
          Close
        </ButtonV2>
        {cartContext.items.length > 0 && (
          <ButtonV2 onClick={handleGoToCheckout}>Go to checkout</ButtonV2>
        )}
      </p>
    </Modal>
  );
}
