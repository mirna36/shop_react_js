import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();
export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [ cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;
  
    const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice + product.price * quantity
        );
        setTotalQuantities(
          (prevTotalQuantities) => prevTotalQuantities + quantity
        );
    if(checkProductInCart){
        const updateCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return{
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
            }
        })

        setCartItems(updateCartItems);
        
    }else{
        product.quantity = quantity;

        setCartItems([...cartItems, {...product}])

    }
    toast.success(`${qty} ${product.name} ajouté au panier.`);
}

const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find(())

}

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const descQty = () => {
        setQty ((prevQty) => {
        if(prevQty - 1 < 1) return 1;
        return prevQty - 1;
    });
    }

    return (
      <Context.Provider
        value={{
          showCart,
          setShowCart,
          cartItems, 
          totalPrice,
          totalQuantities,
          qty,
          incQty,
          descQty,
          onAdd

        }}
      >
        {children}
      </Context.Provider>
    );

}

export const useStateContext = () => useContext(Context);
