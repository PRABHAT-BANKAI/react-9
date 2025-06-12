import React, { useState } from "react";
import ChildCom from "./components/ChildCom";

// what is State in React JS
// What is Props in React JS
// Example: City, state, Country

const App = () => {
  const [name, setName] = useState("prabhat"); //help in state management in functional component  [value , function]
  const [city, setCity] = useState("delhi");
  const [country, setCountry] = useState("india");

  let game = "pubg";
  function handleChange() {
    game = "csgo";
    setName("batman");
    setCity("gothamcity");
    setCountry("america");
  }

  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>City:{city}</h2>
      <h3>Country:{country}</h3>
      <h4>game: {game}</h4>
      <button onClick={handleChange}>Change name</button>
      <ChildCom name={name}  city={city}/>
    </div>
  );
};

export default App;
