import React, { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import cardData from "../CardData";
import HaircutModal from "../components/HaircutModal";
import HairColorModal from "../components/HairColorModal";
import FacialsModal from "../components/FacialsModal";
import NailsModal from "../components/NailsModal";

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
        transition: "opacity 1s ease-in-out",
        opacity: opacity,
      }}
      className="object-cover rounded-xl w-48 h-48 md:h-64 md:w-64"
    />
  );
};

const Services = () => {
  return (
    <div
      className="md:items-center md:text-center sm:items-center sm:text-center items-center text-center p-5 antialiased"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7815640/pexels-photo-7815640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat lg:repeat",
      }}
    >
      <div className="animate-appearance-in">
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark">
          Haircuts
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center">
            <Card
              className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark pt-3">
          Hair Color
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center">
            <Card
              className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark pt-3">
          Facials
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center">
            <Card
              className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <CardBody className="grid grid-cols-2 items-center justify-center">
                <div>
                  <CardImageSlideshow images={cardData[2].imageSrc} />
                </div>
                <ul className="text-lg font-shadowsIntoLight text-pink-100 pl-10 lg:pl-16">
                  <li className="font-bold">Services:</li>
                  <li>-Basical Facial</li>
                  <li>-Spa Facial</li>
                  <li>- *Treatment Addons</li>
                </ul>
              </CardBody>
              <FacialsModal />
            </Card>
          </div>
        </div>
        <h1 className="text-6xl font-cursive rounded-3xl text-brownDark pt-3">
          Nails
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center">
            <Card
              className="sm:w-60 shadow-lg md:w-60 lg:w-4/5 pb-2"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <CardHeader className="justify-center text-brownDark font-shadowsIntoLight">
                <h4 className="font-bold text-pink-100">{cardData[3].title}</h4>
              </CardHeader> */}
              <CardBody className="grid grid-cols-2 items-center justify-center pl-1 gap-3">
                <ul className="text-lg font-shadowsIntoLight text-pink-100 pl-5 lg:pl-16">
                  <li className="font-bold">Services:</li>
                  <li>-Manicure(s)</li>
                  <li>-Gel Polish</li>
                  <li>-*Addons</li>
                </ul>
                <div>
                  <CardImageSlideshow images={cardData[3].imageSrc} />
                </div>
              </CardBody>
              <NailsModal />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
