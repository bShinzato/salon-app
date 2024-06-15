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
import { Link } from "react-router-dom";

const BottomSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior] = useState("inside");
  return (
    <div className="flex justify-center gap-4 pb-5 pt-5">
      <Button
        onPress={onOpen}
        className="bg-pink-100 font-shadowsIntoLight text-lg animate-appearance-in"
        variant="shadow"
      >
        Get Started
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
                Getting Started
              </ModalHeader>
              <ModalBody>
                <p>
                  Hello and welcome to my page! My name is Darelie, and I am
                  really Flexible to book. Please communicate with me for I am
                  open minded and understanding!
                </p>
                <p className="font-semibold italic">
                  Booking and Rescheduling:
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
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
                <p className="font-semibold italic">
                  What to include in your message:
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
                  <li>Your Name</li>
                  <li>Best Contact Info</li>
                  <li>Type of Service</li>
                  <li>* History of your hair up to 8 months.</li>
                  <li>
                    * 3 Types of reference photos are needed prior to
                    appointment
                  </li>
                  <li>* Your current hair now in natural lighting.</li>
                </ul>
                <p className="font-semibold italic">Payment Options:</p>
                <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
                  <li>Cash</li>
                  <li>Zelle</li>
                  <li>ApplePay</li>
                </ul>
                <p className="font-semibold italic">
                  Please allow 24-48 hours for me to respond.
                </p>
                <p className="font-semibold italic">
                  Reschedule 24 hours prior to appointment.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link to="/contactme">
                <Button className="bg-pink-100" onPress={onClose}>
                  Contact Me
                </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Link to="/services">
        <Button
          className="bg-pink-100 pr-6 pl-6 font-shadowsIntoLight text-lg animate-appearance-in"
          variant="shadow"
        >
          Services
        </Button>
      </Link>
    </div>
  );
};

export default BottomSection;
