// What is Hooks in React JS?
// Understand useState with Array, Objects, Boolean, String

import { useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState();
  const [boolean, setBoolean] = useState(false);

  function handleData() {
    let array = ["batman", "superman", "thor", "spiderman"];

    let productData = [
      {
        productName: "adidas",
        price: 123,
        description: "shoes",
      },
      {
        productName: "nike",
        price: 12311,
        description: "shoes",
      },
      {
        productName: "reebok",
        price: 123,
        description: "sports shoes",
      },
    ];

    setData(productData);
  }
  return (
    <>
      <Navbar/>
      <h1>use State</h1>
      <button onClick={handleData}>Get Data</button>
      <br />

      <button
        onClick={() => {
          setBoolean(!boolean);
        }}
      >
        Toggle
      </button>

      <div>
        {boolean ? <h1>welcome</h1> : <h1>thank you</h1>}
        <div style={{ display: "flex", gap: "5px" }}>
          {data &&
            data.map((item) => {
              // condition rendering
              return (
                <Product
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default App;
