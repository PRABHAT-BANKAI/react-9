import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState({ name: "", price: "" });

  async function getData() {
    let res = await axios.get("http://localhost:3000/products");
    setData(res.data);
  }
  console.log(data);
  function handleSubmit(e) {
    e.preventDefault();
    if (productData.name == "" && productData.price == "") {
      alert("firt you have all field ");
      return;
    }
    axios.post("http://localhost:3000/products", productData);
    alert("product added successfully");
    setProductData({ name: "", price: "" });
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          Price:
          <input
            type="text"
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <button>Submit</button>
        </label>
      </form>
      <div style={{ marginTop: "100px" }}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                height: "100px",
                width: "250px",
                border: "1px solid black",
              }}
            >
              <p>Title: {item.name}</p>
              <p>Price: ${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
