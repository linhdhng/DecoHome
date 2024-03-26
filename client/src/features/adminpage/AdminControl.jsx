import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/fetch";

function AdminControl() {

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const auth = useAuth()
  const [data, setData] = useState([]);
  if (!auth.user || auth.user.role !== "Admin") {
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div className="flex-grow">
      <h1>Welcome, {auth.user.name}!</h1>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 h-full overflow-auto bg-white rounded p-3 mt-8 m-b8">
          <Link to="/create" className="btn btn-success btn-sm">
            Add +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Material</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((prod, index) => {
                return (
                  <tr key={index}>
                    <td>{prod.title}</td>
                    <td>{prod.image}</td>
                    <td>{prod.material}</td>
                    <td>{prod.description}</td>
                    <td>{prod.category}</td>
                    <td>{prod.price}</td>
                    <td>
                      <Link
                        to={`/edit/${prod._id}`}
                        className="btn btn-sm btn-success me-2"
                      >
                        Edit
                      </Link>
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminControl;
