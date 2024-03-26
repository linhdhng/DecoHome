import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 

function UpdateProduct() {
  const {id} = useParams()
    
    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [material, setMaterial] = useState()

    useEffect(()=> {
      const fetchData = async() => {
          try {
              const response = await axios.get("http://localhost:5000/api/products"+ id);
              console.log(response);
              setTitle(response.data.title)
              setImage(response.data.image)
              setMaterial(response.data.material)
              setDescription(response.data.description)
              setCategory(response.data.category)
              setPrice(response.data.price)
          } catch(err) {
              console.log(err)
          }
      }
      fetchData();
  }, [])
   
  const navigate = useNavigate()

  const handleUpdate = (e) => {
      e.preventDefault()
      axios.patch('http://localhost:5000/api/products'+ id, {title, image, description, category, price, material})
      .then(res => {
          console.log(res);
          navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Product</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="image"
              placeholder="Upload Image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Category</label>
            <input
              type="text"
              placeholder="Enter Category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Material</label>
            <input
              type="text"
              placeholder="Enter Material"
              className="form-control"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct