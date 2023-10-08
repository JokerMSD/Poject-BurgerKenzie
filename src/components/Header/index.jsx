import React from "react";
import { MdShoppingCart } from "react-icons/md";
import Logo from "../../assets/Logo.svg";
import Style from "./style.module.scss";

export const Header = ({ cartList, setVisible }) => {
  const cartNumber = cartList.reduce((prevValue, product) => {
    return prevValue + product.quantity;
  }, 0);

  return (
    <header className={Style.header}>
      <img className={Style.logo} src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button
          className={Style.cartOpenButton}
          onClick={() => setVisible(true)}
        >
          <MdShoppingCart size={21} />
          <span className={Style.cartNumber}>{cartNumber}</span>
        </button>
      </div>
    </header>
  );
};
