import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      //kiểm tra xem có id sản phẩm tương ứng trong giỏ hàng chưa... nếu chưa thì hàm (!cartItem[itemId]) sẽ trả về giá trị là true//bản chất giá trị của hàm (!cartItem[itemId])  là false
      setCartItem((prev) => ({ ...prev, [itemId]: 1 })); //nếu giá trị của hàm là true thì sẽ thêm 1 sản phẩm vào giỏ hàng
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //nếu giá trị là fasle thì đồng nghĩa với việc giỏ hàng đã có sản phẩm với id tương ứng..hàm { ...prev, [itemId]: prev[itemId] + 1 }  sẽ thêm cộng thêm 1 sản phẩm đó vào bên trong giỏ hàng
    }
    // console.log(
    //   "««««« (prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }) »»»»»",
    //   (prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })
    // );
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); //mục đích giảm số lượng hàng hóa trong giỏ hàng  ...prev, [itemId]: =>>đã có trong giỏ hàng : prev[itemId] - 1 }  trừ đi một sản phảm có id tương ứng
  };

  useEffect(() => {
    console.log("««««« cartItem »»»»»", cartItem);
  }, [cartItem]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      console.log('««««« item »»»»»', item);
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  useEffect(()=>{
    console.log('««««« getTotalCartAmount »»»»»',getTotalCartAmount );
  },[getTotalCartAmount])

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
