import React from "react";
import BottomSection from "./BottomSection";

const TopSection = () => {
  return (
    <>
      <div className="md:items-center md:text-center sm:items-center sm:text-center items-center text-center p-5">
        <div>
          <h1 className="text-6xl font-cursive rounded-3xl text-brownDark animate-appearance-in pb-2">
            Be Your Best Self
          </h1>
          <p className="text-2xl font-shadowsIntoLight text-brownDark animate-appearance-in">
            I offer an exciting range of hairstyles combining the newest trends
            with care!
          </p>
        </div>
      </div>
      <BottomSection />
      <div className="text-4xl rounded-3xl font-cursive text-brownDark animate-appearance-in grid grid-cols-2 justify-center text-center pb-2">
        <h1>Palms Springs</h1>
        <p>Hours</p>
      </div>
      <div className="text-2xl font-cursive text-brownDark animate-appearance-in grid grid-cols-2 justify-center text-center pb-5">
        <h1>75-030 Gerald Ford Dr STE 203, Palm Desert, CA 92211</h1>
        <p>M-F 9:00AM - 5:00PM</p>
      </div>
    </>
  );
};

export default TopSection;
