import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { foodApi } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   const getProducts = async () => {
      const response = await foodApi.get("/products")
      const data = response.data
      localStorage.setItem("productList", JSON.stringify(data));
      setProductList(data);
   };

   getProducts();

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
