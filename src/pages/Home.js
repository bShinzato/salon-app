import React from "react";
import TopSection from "../components/TopSection";
import CardSlideshow from "../components/CardSlideshow";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2061170/pexels-photo-2061170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat lg:repeat",
      }}
    >
      <TopSection />
      <CardSlideshow />
    </div>
  );
};

export default Home;
