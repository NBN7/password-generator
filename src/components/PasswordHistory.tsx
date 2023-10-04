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

import { copyToClipboard } from "../utils/copyToClipboard";

import { useDataContext } from "../context/dataContext";

import { AiFillCopy, AiFillDelete } from "react-icons/ai";

export const PasswordHistory = () => {
  const { passwordHistory, setPasswordHistory } = useDataContext();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleDelete = useCallback(
    (index: number) => {
      const newHistory = [...passwordHistory];
      newHistory.splice(index, 1);

      setPasswordHistory(newHistory);
    },
    [passwordHistory]
  );

  const handleCopy = useCallback(
    (index: number) => {
      copyToClipboard(passwordHistory[index]);
    },
    [passwordHistory]
  );

  const handleClear = useCallback(() => {
    setPasswordHistory([]);
  }, []);

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

                  <div className="flex gap-4">
                    <button onClick={() => handleDelete(index)}>
                      <AiFillDelete
                        className="active:text-[#0070F0] transition-all"
                        size="20px"
                      />
                    </button>

                    <button onClick={() => handleCopy(index)}>
                      <AiFillCopy
                        className="active:text-[#0070F0] transition-all"
                        size="20px"
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No password history</p>
            )}
          </ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>

            <Button color="primary" onClick={handleClear}>
              Clear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};
