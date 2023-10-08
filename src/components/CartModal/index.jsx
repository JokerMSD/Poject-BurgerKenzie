import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import Style from "./style.module.scss";

export const CartModal = ({
  cartList,
  removeFromCart,
  removeAllFromCart,
  setVisible,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price * product.quantity;
  }, 0);

  return (
    <div role="dialog" className={Style.overlayBox}>
      <div className={Style.modalBox}>
        <div className={Style.header}>
          <h2 className={Style.headerTitle}>Carrinho de compras</h2>
          <button
            className={Style.closeButton}
            onClick={() => setVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose className={Style.closeIcon} size={21} />
          </button>
        </div>
        <div className={Style.modalcontent}>
          <div>
            <ul className={Style.ul}>
              {cartList.map((product, index) => (
                <CartItemCard
                  key={product + index}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className={Style.footer}>
          <div className={Style.total}>
            <span className={Style.totalTextBold}>Total</span>
            <span className={Style.totalAmountText}>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <button
              onClick={() => removeAllFromCart()}
              className={Style.removeAllButton}
            >
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
