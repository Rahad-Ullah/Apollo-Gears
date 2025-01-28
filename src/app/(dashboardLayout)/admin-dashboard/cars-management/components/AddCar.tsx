/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button, ModalHeader, useDisclosure } from "@heroui/react";
import AddCarForm from "./AddCarForm";
import CustomModal from "@/app/(dashboardLayout)/components/modal/customModal";

const AddCar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-3">
      <CustomModal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="p-4">Add A Car</ModalHeader>
        <AddCarForm onClose={onClose} />
      </CustomModal>

      <Button size="md" variant="faded" onClick={onOpen}>
        Add Car
      </Button>
    </div>
  );
};

export default AddCar;
