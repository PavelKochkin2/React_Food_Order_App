import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalPrice: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    case "REMOVE_CART_ITEM":
      console.log("REMOVE_CART_ITEM");
      return;
    default:
      return defaultState;
  }
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      payload: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };
  const context = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
