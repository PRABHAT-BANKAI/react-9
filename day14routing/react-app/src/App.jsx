import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Allroutes from "./AllRoutes/Allroutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Allroutes />
      <Footer />
    </>
  );
};

export default App;
