import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./output.css";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/system";

const App = () => {
  return (
    <>
      <NextUIProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </NextUIProvider>
    </>
  );
};

export default App;
