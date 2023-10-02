import { useState, useRef, useEffect } from "react";

import { Progress, Divider, Button } from "@nextui-org/react";

import { SwitchOption } from "./SwitchOption";

import { BiPlus, BiMinus } from "react-icons/bi";

import { PASSWORD_CONFIGURATION } from "../constants/passwordConfiguration";
import { getRandom } from "../utils/getRandom";

import { useDataContext } from "../context/dataContext";

import { Toaster } from "react-hot-toast";
import { toastSuccess } from "../utils/toastNotifications";

export const PasswordGenerator = () => {
  type passwordConfigurationState = {
    [key: string]: boolean;
  };

  const { setPassword } = useDataContext();

  const [passwordLength, setPasswordLength] = useState(15);
  const [passwordConfiguration, setPasswordConfiguration] =
    useState<passwordConfigurationState>({
      symbols: true,
      numbers: true,
      uppercase_letters: true,
    });
  const [isError, setIsError] = useState(false);

  const generatedPassword = useRef<string>("");

  const handleIncrement = () => {
    if (passwordLength >= 40) return;
    setPasswordLength((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (passwordLength === 0) return;
    setPasswordLength((prev) => prev - 1);
  };

  const toggleSymbols = () => {
    setPasswordConfiguration((prev) => ({ ...prev, symbols: !prev.symbols }));
  };

  const toggleNumbers = () => {
    setPasswordConfiguration((prev) => ({ ...prev, numbers: !prev.numbers }));
  };

  const toggleUppercaseLetters = () => {
    setPasswordConfiguration((prev) => ({
      ...prev,
      uppercase_letters: !prev.uppercase_letters,
    }));
  };

  const handleGeneratePassword = () => {
    generatedPassword.current = "";
    const PASSWORD_CONFIGURATION_CLONE = { ...PASSWORD_CONFIGURATION };

    Object.keys(passwordConfiguration).forEach((key) => {
      if (!passwordConfiguration[key]) {
        delete PASSWORD_CONFIGURATION_CLONE[key.toUpperCase()];
      }
    });

    const passwordConfigurationKeys = Object.keys(PASSWORD_CONFIGURATION_CLONE);
    for (let i = 0; i < passwordLength; i++) {
      const randomKey =
        passwordConfigurationKeys[getRandom(passwordConfigurationKeys.length)];
      const randomKeyLength = PASSWORD_CONFIGURATION_CLONE[randomKey].length;
      const randomIndex = getRandom(randomKeyLength);

      generatedPassword.current +=
        PASSWORD_CONFIGURATION_CLONE[randomKey][randomIndex];
    }

    setPassword(generatedPassword.current);
    toastSuccess("Password generated");
  };

  useEffect(() => {
    if (passwordLength === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);
  }, [passwordLength]);

  return (
    <div className="flex flex-col gap-8 px-[10px]">
      <div className="flex justify-between items-center gap-6">
        <Progress
          size="sm"
          maxValue={40}
          value={passwordLength}
          aria-label="Loading..."
        />
        <div className="flex items-center gap-4">
          <BiMinus
            onClick={handleDecrement}
            size="20px"
            style={{ cursor: "pointer" }}
          />
          <h3>{passwordLength}</h3>
          <BiPlus
            onClick={handleIncrement}
            size="20px"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <SwitchOption
        text="Symbols"
        isActive={passwordConfiguration.symbols}
        toggleIsActive={toggleSymbols}
      />
      <SwitchOption
        text="Numbers"
        isActive={passwordConfiguration.numbers}
        toggleIsActive={toggleNumbers}
      />
      <SwitchOption
        text="Uppercase letters"
        isActive={passwordConfiguration.uppercase_letters}
        toggleIsActive={toggleUppercaseLetters}
      />

      <Divider className="my-4" />

      <Button
        isDisabled={isError}
        onClick={handleGeneratePassword}
        variant="shadow"
        color="primary"
        size="lg"
      >
        Generate Password
      </Button>

      <Toaster />
    </div>
  );
};
