import React, { useState } from "react";
import "./ListProduct.css";
import initialProducts from "../../assets/products/all_product";

function ListProduct() {
  const [allProducts, setAllProducts] = useState(initialProducts);
  const [editedProduct, setEditedProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setEditedProduct(product);
  };

  const handleSaveProduct = () => {
    // Save the edited product details to the allProducts array
    const updatedProducts = allProducts.map((product) => {
      if (product.id === editedProduct.id) {
        return editedProduct;
      }
      return product;
    });
    // Update the allProducts array
    setAllProducts(updatedProducts);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };
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
        <p>Edit</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <div>
              {isEditing && editedProduct.id === product.id ? (
                <div className="editable-container">
                  <div className="editable-fields">
                    <div className="editable-fields-item">
                      <span>Name</span>
                      <input
                        className="name"
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleInputChange}
                        style={{height:'40px'}}
                      />
                    </div>
                    <div className="editable-fields-item">
                      <span>Old Price</span>
                      <input
                        type="number"
                        name="old_price"
                        value={editedProduct.old_price}
                        onChange={handleInputChange}
                        style={{width:'80px', height:'40px'}}
                      />
                    </div>
                    <div className="editable-fields-item">
                      <span>New Price</span>
                      <input
                        type="number"
                        name="new_price"
                        value={editedProduct.new_price}
                        onChange={handleInputChange}
                        style={{width:'80px', height:'40px'}}
                      />
                    </div>
                    <div className="editable-fields-item">
                      <span>Category</span>
                      <select
                        name="category"
                        value={editedProduct.category}
                        onChange={handleInputChange}
                        style={{width:'100px', outline:'none', border:'none', height:'40px', padding:'0 10px', borderRadius:'5px'}}
                      >
                        <option value="">Select</option>
                        <option value="fashion">Fashion</option>
                        <option value="skincare">SkinCare</option>
                        <option value="accessories">Accessories</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-success btn-sm"
                      onClick={handleSaveProduct}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
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
                    <i
                      onClick={() => handleEditProduct(product)}
                      class="fa-solid fa-pen-to-square"
                      style={{ color: "green" }}
                    ></i>
                    <i
                      class="fa-solid fa-trash-can"
                      style={{ color: "red" }}
                    ></i>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
