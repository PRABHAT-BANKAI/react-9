import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer";

import Navabar from "./components/Navbar";

const App = () => {
  let name = "batman";
  let product = {
    name: "adidas",
    price: 12356,
    description: "shoes",
  };

  let array = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

  return (
    // react fragment
    <>
      <Navabar />
      <div className="main-cont">
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
      <h1>list</h1>
      <div>
        <ol>
          {array.map((element) => {
            return <li>{element}</li>;
          })}
        </ol>
      </div>
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </>
  );
};

export default App;
