import mealsImg from "../../assets/meals.jpg";

import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Paha cooks</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="havka" />
      </div>
    </>
  );
};

export default Header;
