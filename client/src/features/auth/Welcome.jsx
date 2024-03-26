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
    <section>
      <h1>Welcome User</h1>
      <p>
        <Link to="/dashboard/userfile">View Your Products</Link>
      </p>
      {/* <p>
        <Link to="/dashboard/admin">Admin Control</Link>
      </p> */}
      {data.map((prod, index) => {
        return (
          <div key={index}>
            <h4>{prod.title}</h4>
          </div>
        );
      })}
    </section>
  );
}

export default Welcome;
