import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import cardData from "../CardData";

const CardSlideshow = () => {
  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-2">
        {cardData.map((card, index) => (
          <Card key={index} className="sm:w-60 hover:scale-105 shadow-lg">
            <CardHeader className="justify-center text-brownDark font-shadowsIntoLight">
              <h4 className="font-bold">{card.title}</h4>
            </CardHeader>
            <CardBody>
              <Image
                alt="Card background"
                src={card.imageSrc}
                className="object-cover rounded-xl w-48 h-48 md:h-64 md:w-64"
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardSlideshow;
