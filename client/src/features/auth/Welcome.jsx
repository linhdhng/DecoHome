import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Welcome() {
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


  return (
    <div className="dashboard">
      <section className="userPage">
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
          </div>
        )
      })}</div>
      </section>
    </div>
  );
}

export default Welcome;
