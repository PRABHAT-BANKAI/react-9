import reactLogo from "./assets/react.svg";

const App = () => {
  let name = "batman";
  let product = {
    name: "adidas",
    price: 12356,
    description: "shoes",
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
          hello react
        </h1>
        <h2>welcome to react</h2>
      </div>
      <div>
        <div>
          <img src={reactLogo} alt="" />
        </div>
        <div>
          {/* for javscript variable you can use curly braces for show text in html */}
          <h1>text :{name}</h1>
        </div>
      </div>
      <div>
        <h2>Title:{product.name}</h2>
        <p>Price:{product.price}</p>
        <p>description:{product.description}</p>
      </div>
    </div>
  );
};

export default App;
