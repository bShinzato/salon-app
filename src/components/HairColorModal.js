import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const HairColorModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior] = useState("inside");
  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-pink-100 font-shadowsIntoLight text-lg hover:scale-105 animate-pulse"
        variant="shadow"
      >
        Hair Color Info
      </Button>
      <Modal
        backdrop="opaque"
        scrollBehavior={scrollBehavior}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-b from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Hair Color Info
              </ModalHeader>
              <ModalBody>
                <p className="underline font-semibold">
                  Hair Color deposit: $25
                </p>
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "40px",
                  }}
                >
                  <li>
                    Deposits are required to book your appointment via zelle or
                    ApplePay.
                  </li>
                  <li>
                    Deposits are non refundable to cancellations and no call no
                    show.
                  </li>
                  <li>
                    To book an appointment please contact me via Text, Email, or
                    DM on instagram or TikTok.
                  </li>
                </ul>
                <p className="underline font-semibold">
                  What to include in your message:
                </p>
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "40px",
                  }}
                >
                  <li>Your name</li>
                  <li>Best contact Info</li>
                  <li>Type of Service</li>
                  <li>History of your hair up to 8 months.</li>
                  <li>
                    3 Types of reference photos are needed prior to appointment
                  </li>
                  <li>Your current hair now in natural lighting.</li>
                </ul>
                <p className="underline font-semibold">Payment Options:</p>
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "40px",
                  }}
                >
                  <li>Cash</li>
                  <li>Zelle</li>
                  <li>ApplePay</li>
                </ul>
                <li className="underline font-semibold">
                  Please allow 24-48 hours for me to respond.
                </li>
                <li className="underline font-semibold">
                  Reschedule 24 hours prior to appointment.
                </li>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-pink-100" onPress={onClose}>
                  Contact Me
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HairColorModal;
