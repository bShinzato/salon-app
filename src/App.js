import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden ">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
