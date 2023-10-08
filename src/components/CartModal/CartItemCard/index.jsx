import { MdDelete } from "react-icons/md";
import Style from "./style.module.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
  return (
    <li>
      <div className={Style.cardcontainer}>
        <img className={Style.img} src={product.img} alt={product.name} />
        <div className={Style.info}>
        <h3 className={Style.name}>{product.name}</h3>
        <p className={Style.price}>{product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}</p>
        </div>
        <button
          className={Style.removeButton}
          onClick={() => removeFromCart(product)}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};
