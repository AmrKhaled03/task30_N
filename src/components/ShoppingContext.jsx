import React,{useState,useEffect,createContext} from 'react'
import Swal from "sweetalert2";
export const ShoppingContext = createContext();
export const ContextProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];



    const [cart, setCart] = useState(cartStorage);
    const favStorage = JSON.parse(localStorage.getItem("specialsList")) || [];
  
    const [specialsList, setSpecialsList] = useState(favStorage);
  
  
    const addToSpecials = (item) => {
      let productItem = specialsList.find((product) => product.id === item.id);
      if (productItem) {
        productItem.quantity += 1;
        setSpecialsList([...specialsList]);
        Swal.fire(
          "Product is added to Favourites!",
          
          "success"
        );
      } else {
        item.quantity = 1;
        setSpecialsList([item, ...specialsList]);
        Swal.fire(
          "Product is added to Favourites!",
          
          "success"
        );
      }
    };
  
    const delItemFav = (id) => {
      setSpecialsList(specialsList.filter((product) => product.id !== id));
    };
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("specialsList", JSON.stringify(specialsList));
   
  
  
    });
  
    const addCart = (item) => {
      let productItem = cart.find((product) => product.id === item.id);
      if (productItem) {
        productItem.quantity += 1;
        setCart([...cart]);
        Swal.fire(
          "Product is added successfully!",
          "You clicked the button!",
          "success"
        );
      } else {
        item.quantity = 1;
        setCart([item, ...cart]);
        Swal.fire(
          "Product is added successfully!",
          "You clicked the button!",
          "success"
        );
      }
    };
  
    const updateCartItem = (item) => {
      let productItem = cart.find((product) => product.id === item.id);
  
      if (productItem) {
        productItem.quantity += 1;
        setCart([...cart]);
        if (productItem.quantity === 0) {
          setCart(cart.filter((product) => product.id !== item.id));
        }
      } else {
        setCart([...cart]);
      }
    };
  
    const decCartItem = (item) => {
      let productItem = cart.find((product) => product.id === item.id);
  
      if (productItem) {
        productItem.quantity -= 1;
        setCart([...cart]);
        if (productItem.quantity === 0) {
          setCart(cart.filter((product) => product.id !== item.id));
        }
      } else {
        setCart([...cart]);
      }
    };
    const delItem = (id) => {
      setCart(cart.filter((product) => product.id !== id));
    };
    const delAll = () => {
      setCart([]);
    };

    const contextValue = {
       cart,
       addCart,
       addToSpecials,
       decCartItem,
       delAll,
       delItem,
       delItemFav,
       updateCartItem,
       specialsList
     
      };
    return(
        <ShoppingContext.Provider value={contextValue} >
     {children}       
        </ShoppingContext.Provider>

    );
}   


