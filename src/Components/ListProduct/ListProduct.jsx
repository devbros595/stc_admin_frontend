import React from "react";
import "./ListProduct.css";
import allProducts from "../../assets/products/all_product";

function ListProduct() {
  return (
    <div className="list-product">
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>#</p>
        <p>Product</p>
        <p>Name</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
        <p>Edit</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <div>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <p>{index + 1}</p>
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-img"
                />
                <p>{product.name}</p>
                <p>€{product.old_price}</p>
                <p>€{product.new_price}</p>
                <p>{product.category}</p>
                <i class="fa-solid fa-trash-can" style={{color:'red'}}></i>
                <i class="fa-solid fa-pen-to-square" style={{color:'green'}}></i>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
