import React, { useState } from "react";
import "./AddProduct.css";
import upload from "../../assets/upload_area.svg";

function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    new_price: "",
    old_price: "",
    description: "",
    category: "",
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const productDetailsHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value})
  }
  const addProduct = async() => {
    console.log(productDetails);
    alert('Product added!')
  }



  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Name:</p>
        <input  type="text" name="name" placeholder="Enter product name" value={productDetails.name} onChange={productDetailsHandler}/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Old Price:</p>
          <input type="text" name="old_price" placeholder="Enter price" value={productDetails.old_price} onChange={productDetailsHandler} />
        </div>
        <div className="addproduct-itemfield">
          <p>New Price:</p>
          <input type="text" name="new_price" placeholder="Enter price" value={productDetails.new_price} onChange={productDetailsHandler}/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category:</p>
        <select name="category" className="product-category-selector" value={productDetails.category} onChange={productDetailsHandler}>
          <option value="">Select Category</option>
          <option value="fashion">Fashion</option>
          <option value="skincare">SkinCare</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Description:</p>
        <textarea name="description" placeholder="Enter product description" value={productDetails.description} onChange={productDetailsHandler}/>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Image:</p>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            className="addproduct-thumbnail"
            alt=""
          />
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </label>
      </div>
      <button onClick={()=>{addProduct()}} className="addproduct-btn">ADD</button>
    </div>
  );
}

export default AddProduct;
