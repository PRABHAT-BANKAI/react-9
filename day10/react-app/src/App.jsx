import React, { useEffect, useState } from "react";
import cartoon from "./assets/image1.jpeg";
import Home from "./Pages/Home";

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setdata(result);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <h1>image</h1>
      <img src={cartoon} alt="" height={"200px"} />
      <img src="./vite.svg" alt="" /> */}
      {/* <Home/> */}
      <button onClick={() => setDarkmode(!darkmode)}>Dark Mode</button>
      {loading && (
        <p style={{ color: darkmode ? "white" : "black" }}>Loading...</p>
      )}

      <div
        style={{
          color: darkmode ? "white" : "black",
          backgroundColor: darkmode ? "black" : "white",
        }}
      >
        {data.map((item) => (
          <div key={item.id} className="border p-4 m-2">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
