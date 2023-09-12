import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import cardData from "../CardData";

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

const CardSlideshow = () => {
  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-2">
        {cardData.map((card, index) => (
          <Card key={index} className="sm:w-60 shadow-lg hover:scale-105">
            <CardHeader className="justify-center text-brownDark font-shadowsIntoLight">
              <h4 className="font-bold">{card.title}</h4>
            </CardHeader>
            <CardBody>
              <CardImageSlideshow images={card.imageSrc} />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardSlideshow;
