import { useState, useEffect } from "react";
import axios from "axios";

function FilteredProducts({ category }) {
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
    const ProductCard = ({ title, description, price }) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
          </div>
        </div>
      );
      

        const filteredProducts = data.filter(product => product.category === category);
      
        return (
          <div className="row">
            {filteredProducts.map(product => (
              <div className="col-md-4" key={product._id}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        );
      
      
}

export default FilteredProducts