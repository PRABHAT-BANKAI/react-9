// Make a form using BT ( Name, email, Password, Phone)
// Controlled and Uncontrolled Form
// Insert data into LocalStorage
// View using useEffect in Single Page

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState({});

  const [submitData, setSubmitData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      setSubmitData(data);
      setData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
    }
  }

  function validation() {
    let object = {};
    let val = true;

    if (!data.name.trim()) {
      object.name = "name is not valid";
      val = false;
    }
    if (!data.email.trim()) {
      object.email = "email is not valid";
      val = false;
    }
    if (!data.password.trim()) {
      object.password = "password is not valid";
      val = false;
    }
    if (!data.phone.trim()) {
      object.phone = "phone is not valid";
      val = false;
    }

    setError(object);
    return val;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
          />
          {error.name && <p style={{ color: "red" }}> {error.name}</p>}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="text"
          />
          {error.email && <p style={{ color: "red" }}> {error.email}</p>}
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="text"
          />
          {error.password && <p style={{ color: "red" }}> {error.password}</p>}
        </div>
        <div>
          <label htmlFor="">Phone:</label>
          <input
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            type="text"
          />
          {error.phone && <p style={{ color: "red" }}> {error.phone}</p>}
        </div>
        <button>Submit</button>
      </form>

      <div>
        {submitData.name && <p> {submitData.name}</p>}

        {submitData.email && <p> {submitData.email}</p>}

        {submitData.password && <p> {submitData.password}</p>}

        {submitData.phone && <p> {submitData.phone}</p>}
      </div>
    </div>
  );
};

export default App;
