import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
