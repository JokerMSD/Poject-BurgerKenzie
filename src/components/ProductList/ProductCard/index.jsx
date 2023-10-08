import Style from "./style.module.scss";

export const ProductCard = ({ product, addToCart }) => {
  return (
    <li className={Style.container}>
      <section className={Style.imgcontainer}>
        <img className={Style.img} src={product.img} alt={product.name} />
      </section>
      <div className={Style.productInfo}>
        <h3 className={Style.nameProduct}>{product.name}</h3>
        <span className={Style.category} >{product.category}</span>
        <span className={Style.price} >
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addToCart(product)} className="buttonMedium">
          Adicionar
        </button>
      </div>
    </li>
  );
};
