import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useCookies } from 'react-cookie';
import { useAuth } from "../../context/fetch";

function Welcome({ products }) {
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

  const handleAddToCart = (product) => {
    const updatedCart = [...(cookies.cart || []), product];
    setCookie('cart', JSON.stringify(updatedCart), { path: '/' });
  };

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
            <Button onClick={() => handleAddToCart(products)} className="btn btn-primary">Add to Cart</Button>
            <Link>View your cart here</Link>
          </div>
        )
      })}</div>
      </section>
    </div>
  );
}

export default Welcome;
