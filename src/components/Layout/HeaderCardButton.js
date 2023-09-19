import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const { totalAmount } = useContext(CartContext);
  //console.log(ctx);
  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>Items count: {totalAmount}</span>
    </button>
  );
};
export default HeaderCardButton;
