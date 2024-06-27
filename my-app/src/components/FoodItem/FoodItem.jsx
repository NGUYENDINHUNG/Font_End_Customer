import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/asset";
import { StoreContext } from "../../Context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url + "/images/" + image} alt="" />

        {!cartItem[id] ? ( //kiểm tra xem sản phẩm đã có trong giỏ hàng chưa, nếu chưa sẽ trả về giá trị là true => hiển thị nút addTocart
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          //nếu trả về giá trị false => đã có hàng trong giỏ hàng thì sẽ hiển thị thẻ div có nút thêm addtocart và removecart và số lượng sản phẩm (cartItem[id])
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-ratting">
          <img src={assets.rating_starts} alt="" />
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
