import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import ordersIcon from "../../assets/order_icon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="add product icon" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="list product icon" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={"orders"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img style={{transform:'scale(2)', marginTop:'auto'}} src={ordersIcon} alt="list product icon" />
          <p>Orders</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
