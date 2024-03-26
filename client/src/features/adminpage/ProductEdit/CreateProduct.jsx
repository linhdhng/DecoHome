import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateProduct() {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [material, setMaterial] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", {
        title,
        image,
        description,
        category,
        material,
        price,
      })
      .then((res) => {
        console.log(res);
        navigate("/admin")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Create Product</h2>
          <div className="mb-2">
            <label htmlFor="">title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="image"
              placeholder="Upload image"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Material</label>
            <input
              type="text"
              placeholder="Enter Material"
              className="form-control"
              onChange={(e) => setMaterial(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Category</label>
            <input
              type="text"
              placeholder="Enter Category"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
