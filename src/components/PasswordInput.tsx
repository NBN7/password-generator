import { useState, useCallback } from "react";

import { Input } from "@nextui-org/react";

import { Toaster } from "react-hot-toast";

import { copyToClipboard } from "../utils/copyToClipboard";

import { useDataContext } from "../context/dataContext";

import { AiFillEye, AiFillEyeInvisible, AiFillCopy } from "react-icons/ai";

export const PasswordInput = () => {
  const { password } = useDataContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const handleCopy = useCallback(() => {
    if (!password) return;
    copyToClipboard(password);
  }, [password]);

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
                <AiFillEyeInvisible size="23px" onClick={toggleIsVisible} />
              ) : (
                <AiFillEye size="23px" onClick={toggleIsVisible} />
              )}
            </button>

            <button>
              <AiFillCopy onClick={handleCopy} size="20px" />
            </button>
          </div>
        }
      />
      <Toaster />
    </>
  );
};
