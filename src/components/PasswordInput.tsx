import { useState } from "react";

import { Input } from "@nextui-org/react";

import { AiFillEye, AiFillEyeInvisible, AiFillCopy } from "react-icons/ai";

import { useDataContext } from "../context/dataContext";

import { Toaster } from "react-hot-toast";
import { toastSuccess, toastError } from "../utils/toastNotifications";

export const PasswordInput = () => {
  const { password } = useDataContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      toastSuccess("Copied to clipboard");
    } catch (error) {
      toastError("Failed to copy to clipboard");
    }
  };

  return (
    <>
      <Input
        size="lg"
        variant="bordered"
        color="primary"
        type={isVisible ? "text" : "password"}
        label="Password"
        placeholder="Generate your password"
        required
        readOnly
        value={password}
        endContent={
          <div className="flex gap-4">
            <button>
              {isVisible ? (
                <AiFillEyeInvisible size="22px" onClick={toggleIsVisible} />
              ) : (
                <AiFillEye size="22px" onClick={toggleIsVisible} />
              )}
            </button>
            <button>
              <AiFillCopy onClick={handleCopy} size="18px" />
            </button>
          </div>
        }
      />
      <Toaster />
    </>
  );
};
