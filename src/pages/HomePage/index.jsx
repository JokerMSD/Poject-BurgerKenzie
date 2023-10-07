import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { foodApi } from "../../services/api";
import { useEffect } from "react";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
      try{
      const response = await foodApi.get("/products")
      const data = response.data
      setProductList(data);
      } catch(error) {
         console.log(error.message);
      }
   };
   getProducts();
}) 

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(productList))
   },[productList])


   // useEffect montagem - carrega os produtos da API e joga em productList               (X)
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)      (X)
   // adição, exclusão, e exclusão geral do carrinho                                      ( )
   // renderizações condições e o estado para exibir ou não o carrinho                    ( )
   // filtro de busca                                                                     ( )
   // estilizar tudo com sass de forma responsiva                                         ( )

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
