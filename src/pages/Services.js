import React, { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import cardData from "../CardData";
import HaircutModal from "../components/HaircutModal";
import HairColorModal from "../components/HairColorModal";

const CardImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0.05);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 500);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <Image
      alt="Card background"
      src={images[currentImageIndex]}
      style={{
        transition: "opacity 2s ease-in-out",
        opacity: opacity,
      }}
      className="object-cover rounded-xl w-48 h-48 md:h-64 md:w-64"
    />
  );
};

const Services = () => {
  return (
    <>
    <div
      className="p-5 antialiased lg:grid lg:grid-cols-2 lg:gap-5 animate-appearance-in"
    >
      <div className="flex flex-col items-center w-full lg:w-auto">
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark">
          Haircuts
        </h1>
        <div className="flex justify-center items-center">
          <Card
            className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CardBody className="grid grid-cols-2 items-center justify-center gap-3">
              <div>
                <CardImageSlideshow images={cardData[0].imageSrc} />
              </div>
              <ul className="text-lg font-shadowsIntoLight text-pink-100 pl-10 lg:pl-16">
                <li className="font-bold">Services:</li>
                <li>-Bang Trim</li>
                <li>-Haircuts</li>
                <li>-Style Haircuts</li>
                <li>-Beard Trim</li>
              </ul>
            </CardBody>
            <HaircutModal />
          </Card>
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:w-auto">
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark pt-3">
          Hair Color
        </h1>
        <div className="flex justify-center items-center">
          <Card
            className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CardBody className="grid grid-cols-2 items-center justify-center pl-1 gap-3">
              <ul className="text-lg font-shadowsIntoLight text-pink-100 pl-5 lg:pl-16">
                <li className="font-bold">Services:</li>
                <li>-Toner & Gloss</li>
                <li>-Color Retouch</li>
                <li>-All over Color</li>
                <li>-Color Correction</li>
                <li>-Partial Highlights</li>
                <li>-Full Highlights</li>
                <li>-Balayage</li>
              </ul>
              <div>
                <CardImageSlideshow images={cardData[1].imageSrc} />
              </div>
            </CardBody>
            <HairColorModal />
          </Card>
        </div>
      </div>
    </div>

    <div className="flex place-content-center">
      <h1 className="text-6xl font-cursive rounded-3xl text-brownDark">
        Gallery
      </h1>
    </div>

      </>
  );
};

export default Services;
