import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./output.css";
import { NextUIProvider } from "@nextui-org/system";

const App = () => {
  return (
    <>
      <NextUIProvider>
        <div className="overflow-x-hidden">
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
