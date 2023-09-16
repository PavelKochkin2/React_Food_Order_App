import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <>
      <Header />
      <main>
        <Cart />
        <Meals />
      </main>
    </>
  );
}

export default App;
