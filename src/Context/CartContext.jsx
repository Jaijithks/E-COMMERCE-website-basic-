import { createContext, useContext, useState } from "react";
import { getProductsByID } from "../Products/Products";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    function addTocart(productid){
            const exists = cart.find((item) => item.id === productid)
            if(!exists){
                setCart([...cart,{id: productid,quantity: 1}])
            }
            else{
                const currentQuantity = exists.quantity;
                const UpdatedCart = cart.map((item) => item.id === productid ? {id: productid,quantity: currentQuantity+1} : item);
                setCart(UpdatedCart);
            }
   
    }
     function getproductcart(){
        return cart.map((item=> ({...item,product: getProductsByID(item.id)}))).filter(item => item.product);
    }

    function updateQuantity(productid, delta){
        const exists = cart.find((item) => item.id === productid);
        if (!exists) return;

        const nextQuantity = exists.quantity + delta;
        if (nextQuantity <= 0) {
            setCart(cart.filter((item) => item.id !== productid));
            return;
        }

        setCart(cart.map((item) => item.id === productid ? {...item, quantity: nextQuantity} : item));
    }

    function removeFromCart(productid) {
        setCart(cart.filter((item) => item.id !== productid));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addTocart, getproductcart, updateQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart(){
    return useContext(CartContext)
};