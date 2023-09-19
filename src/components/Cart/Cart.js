import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useState } from "react";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Chebyreki", amount: 3, price: 8.95 },
  ].map((item) => <li>{item.name}</li>);
  debugger;
  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>13.07</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
