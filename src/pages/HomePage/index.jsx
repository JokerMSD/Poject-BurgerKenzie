import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { foodApi } from "../../services/api";

export const HomePage = () => {
   const [isVisible, setVisible] = useState(false);
   const [productList, setProductList] = useState(() => {
      const storedProducts = JSON.parse(localStorage.getItem("@PRODUCTS"));
      return storedProducts || [];
   });
   const [cartList, setCartList] = useState(() => {
      const storedCart = JSON.parse(localStorage.getItem("@CART"));
      return storedCart || [];
   });

   const addToCart = (productToAdd) => {
      const existingProductIndex = cartList.findIndex(product => product.id === productToAdd.id);

      if (existingProductIndex !== -1) {
         const updatedCart = [...cartList];
         updatedCart[existingProductIndex].quantity += 1;
         setCartList(updatedCart);
         toast.success(`Mais 1 ${productToAdd.name} adicionado ao carrinho`);
      } else {
         const productWithQuantity = { ...productToAdd, quantity: 1 };
         setCartList([...cartList, productWithQuantity]);
         toast.success(`${productToAdd.name} adicionado ao carrinho`);
      }
   }
   const removeFromCart = (productToRemove) => {
      const updatedCart = cartList.filter(product => {
         if (product.id === productToRemove.id) {
            if (product.quantity > 1) {
               product.quantity -= 1;
               toast.error(`${productToRemove.name} removido do carrinho`);
               return true;
            } else {
               return false;
            }
         } else {
            return true;
         }
      });

      setCartList(updatedCart);
   }
   
   const removeAllFromCart = () => {
      toast.error("Todos os produtos removidos do carrinho");

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
      localStorage.setItem("@CART", JSON.stringify(cartList))
   }, [cartList]);
   
   useEffect(() => {
      localStorage.setItem("@PRODUCTS", JSON.stringify(productList))
   },[productList]);
   
   return (
      <>
         <Header 
            cartList={cartList}
            setVisible={setVisible} 
         />
         <main>
            <ProductList 
            productList= {productList} 
            setCartList= {setCartList} 
            addToCart= {addToCart} 
            />
            {isVisible ? <CartModal 
            setVisible={setVisible}
            cartList={cartList} 
            removeFromCart={removeFromCart} 
            removeAllFromCart={removeAllFromCart} 
            /> : null}
         </main>
      </>
   );
};
