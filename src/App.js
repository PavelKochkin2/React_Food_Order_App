import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
        <Meals />
      </main>
    </>
  );
}

export default App;
