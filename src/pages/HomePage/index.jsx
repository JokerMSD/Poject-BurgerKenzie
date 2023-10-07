import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { foodApi } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState(() => {
      const storedProducts = JSON.parse(localStorage.getItem("products"));
      return storedProducts || [];
   });
   const [cartList, setCartList] = useState(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      return storedCart || [];
   });

   const addToCart = (productToAdd) => {
      setCartList(cartList => [...cartList, productToAdd]);
      toast.success(`${productToAdd.name} adicionado ao carrinho`);
   };
   
   const removeFromCart = (productToRemove) => {
      toast.error(`${productToRemove.name} removido do carrinho`);
      setCartList(cartList => cartList.filter(product => product.id !== productToRemove.id));
   };
   
   const removeAllFromCart = () => {
      setCartList([]);
   };
   
   
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
   },[]);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartList))
   }, [cartList]);
   
   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(productList))
   },[productList]);
   

   // useEffect montagem - carrega os produtos da API e joga em productList               (X)
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)      (X)
   // adição, exclusão, e exclusão geral do carrinho                                      (X)
   // renderizações condições e o estado para exibir ou não o carrinho                    ( )
   // filtro de busca                                                                     ( )
   // estilizar tudo com sass de forma responsiva                                         ( )

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} setCartList={setCartList} addToCart={addToCart} />
            <CartModal cartList={cartList} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} />
         </main>
      </>
   );
};
