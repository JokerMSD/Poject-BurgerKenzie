import React, { useState } from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import Logo from "../../assets/Logo.svg";
import Style from "./style.module.scss";

export const Header = ({cartList,setVisible}) => {
   const [value, setValue] = useState("");
   const cartNumber = cartList.length
   return (
      <header className={Style.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setVisible(true)}>
                <MdShoppingCart size={21} />
                <span>{cartNumber}</span>
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
