import { ProductCard } from "./ProductCard";
import Style from "./style.module.scss";

export const ProductList = ({ productList, setCartList, addToCart }) => {
  return (
    <ul className={Style.ul}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartList={setCartList}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
};
