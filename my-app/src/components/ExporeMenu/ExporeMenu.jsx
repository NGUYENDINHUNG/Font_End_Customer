import React ,{useState} from "react";
import "./ExporeMenu.css";
import { menu_list } from "../../assets/asset";

function ExporeMenu({ category, setCategory }) {
 
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Expore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipiseritatis dicta ad nisianimi earum iure possimus!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {  //onClick Handler:Nếu category hiện tại (prev) bằng với tên menu (item.menu_name), đặt category thành "All".Nếu không, đặt category thành tên menu (item.menu_name).
          return (
            <div
              onClick={() => setCategory((prev) =>  prev === item.menu_name ? "All" : item.menu_name  )}key={index} className="explore-menu-list-item" > 
              {/* cụ thể nếu onclick vào setCategory thì sẽ kiểm tra xem prev(prev là giá trị của category có băng item.name hay không nếu có thì set thành ALL nếu ALL thì set thành item.menu_name) */}
              <img className={category === item.menu_name ? "active" : ""}src={item.menu_image} alt="" />  
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExporeMenu;
