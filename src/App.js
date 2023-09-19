import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
