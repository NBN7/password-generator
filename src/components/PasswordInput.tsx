import { useState } from "react";

import { Input } from "@nextui-org/react";

import { AiFillEye, AiFillEyeInvisible, AiFillCopy } from "react-icons/ai";

import { useDataContext } from "../context/dataContext";

export const PasswordInput = () => {
  const { password } = useDataContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (error) {
      console.error(`Failed to copy to clipboard ${error}`);
    }
  };

  return (
    <Input
      size="lg"
      classNames={{ label: "text-[#705AD8]" }}
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
  );
};
