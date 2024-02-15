import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { DummyContextProvider } from "./store/DummyContext";
import { HistoryContextProvider } from "./store/HistoryContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <HistoryContextProvider>
      <UserProgressContextProvider>
        <CartContextProvider>
            <Header />
            <Meals />
            <Cart />
            <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </HistoryContextProvider>
  );
}

export default App;
