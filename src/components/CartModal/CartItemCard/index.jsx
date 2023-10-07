import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeFromCart }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
      <button
        onClick={() => removeFromCart(product)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
