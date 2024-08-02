import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Gallary from "./pages/Gallary";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallary" element={<Gallary />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
