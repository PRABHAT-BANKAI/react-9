import { useEffect, useState } from "react";
// Understand useEffect
//Store data into localstorage help of useEffect
const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("local")) || 0
  );

  console.log(count);

  async function getData() {
    let result = await fetch("https://fakestoreapi.com/products");
    let response = await result.json();
    console.log(response);
    setData(response);
  }

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(count));
    getData();
  }, [count]);

  return (
    <div>
      <h1>api get</h1>
      <p>Count: {count}</p>
      <button
        disabled={count == 10}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                width: "300px",
                height: "300px",
              }}
            >
              <img src={item.image} alt="" height={"100px"} />
              <h2>Title: {item.title.slice(0, 10)}</h2>
              <p>Price: {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
