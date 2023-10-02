import { useCallback } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";

import { toastSuccess, toastError } from "../utils/toastNotifications";

import { AiFillCopy } from "react-icons/ai";

import { useDataContext } from "../context/dataContext";

export const PasswordHistory = () => {
  const { passwordHistory } = useDataContext();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleCopy = useCallback(
    async (index: number) => {
      try {
        await navigator.clipboard.writeText(passwordHistory[index]);
        toastSuccess("Copied to clipboard");
      } catch (error) {
        toastError("Failed to copy to clipboard");
      }
    },
    [passwordHistory]
  );

  return (
    <section className="w-full p-[10px]">
      <Button variant="bordered" size="lg" className="w-full" onPress={onOpen}>
        History
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>History</ModalHeader>
          <ModalBody>
            {passwordHistory.length > 0 ? (
              passwordHistory.map((password, index) => (
                <div className="flex justify-between" key={index}>
                  <p>{password}</p>
                  <button onClick={() => handleCopy(index)}>
                    <AiFillCopy />
                  </button>
                </div>
              ))
            ) : (
              <p>No password history</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};
