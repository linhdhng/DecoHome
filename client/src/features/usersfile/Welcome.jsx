import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
// import {useWishlist} from "../../context/WishlistContext"
import { useAuth } from "../../context/fetch";

function Welcome({ product }) {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const { addToWishlist } = useWishlist()
  // const handleAddToWishlist = () => {
  //   addToWishlist(product);
  // };

  return (
    <div className="dashboard">
      <section className="userPage">
      <Button onClick={handleClick}>LogOut</Button>
      <h1>Welcome User</h1>
      <p>
        <Link to="/dashboard/userfile">View Your Products</Link>
      </p>

      <div className="products">
      {data.map((prod, index) => {
        return (
          <div className="card" key={index}>
            <h5>{prod.title}</h5>
            <p>{prod.description}</p>
            {/* <Button onClick={handleAddToWishlist} className="btn btn-primary">Add to List</Button>
            <Link to="/wishlist"> View your List</Link> */}
          </div>
        )
      })}</div>
      </section>
    </div>
  );
}

export default Welcome;
