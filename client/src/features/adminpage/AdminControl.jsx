import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import EditForm from "./ProductEdit/UpdateProduct";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";

function AdminControl() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCloseEdit = () => {
    setEditIndex(null);
  };

  const handleSubmitEdit = async (formData) => {
    try {
      // Make Axios PUT request to update item data
      await axios.put(
        `http://localhost:5000/api/products/${formData._id}`,
        formData
      );
      // Once updated, fetch updated data and close the edit form
      fetchData();
      setEditIndex(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/${data[index]._id}`
      );
      console.log("Item deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <div className="table-wrap">
        <h1 className="p-4">Welcome Admin</h1>
        <div className=" h-full overflow-auto bg-white rounded p-3 mt-8 m-b8">
          <table id="example" className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Material</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((prod, index) => (
                <tr key={index}>
                  <td>{prod.title}</td>
                  <td>{prod.image}</td>
                  <td>{prod.material}</td>
                  <td>{prod.description}</td>
                  <td>{prod.category}</td>
                  <td>{prod.price}</td>
                  <td>
                    <Link to="/create" className=" btn btn-success btn-m"><MdOutlineAdd/></Link>
                    <Button
                      className="button-box"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit/>
                    </Button>
                    <Button
                      className="button-box"
                      variant="danger"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editIndex !== null && (
        <EditForm
          data={data[editIndex]}
          onClose={handleCloseEdit}
          onSubmit={handleSubmitEdit}
        />
      )}
    </div>
  );
}

export default AdminControl;
