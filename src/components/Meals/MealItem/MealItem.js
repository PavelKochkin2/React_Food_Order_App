import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const { name, description, price, id } = props.meal;
  const priceFormated = `$${price.toFixed(2)}`;

  const onAddClickedHandler = (amount) => {
    cartContext.addItem({
      name: name,
      id: id,
      description: description,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFormated}</div>
      </div>
      <div>
        <MealItemForm onAddClickedHandler={onAddClickedHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
