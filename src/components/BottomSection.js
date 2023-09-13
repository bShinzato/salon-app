import React from "react";
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
  return (
    <div className="flex justify-center gap-4">
      <Button
        onPress={onOpen}
        className="bg-pink-100 font-shadowsIntoLight text-lg animate-appearance-in"
        variant="shadow"
      >
        Get Started
      </Button>
      <Modal
        backdrop="opaque"
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
                  Hello and Welcome! My name is Darelie and thank you for taking
                  the time to visit my website!
                </p>
                <p className="underline font-semibold">
                  Booking and Rescheduling:
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
                  <li>Please contact me 48+ hours advance.</li>
                  <li>Please show up 5-10 minutes early.</li>
                  <li>Direct deposit is required (Based on Services).</li>
                  <li>
                    Reschedule 24 Hours in advance, Direct Deposit will be
                    returned.
                  </li>
                </ul>
                <p className="underline font-semibold">Payment Options:</p>
                <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
                  <li>Cash</li>
                  <li>ApplePay</li>
                  <li>Venmo</li>
                </ul>
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
