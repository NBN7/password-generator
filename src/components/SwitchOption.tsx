import { Switch } from "@nextui-org/react";

type PasswordSwitchProps = {
  text: string;
  isActive: boolean;
  toggleIsActive: () => void;
};

export const SwitchOption = ({
  text,
  isActive,
  toggleIsActive,
}: PasswordSwitchProps) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-[#A1A1AA]">{text}</h3>
      <Switch defaultSelected={isActive} onClick={toggleIsActive}></Switch>
    </div>
  );
};
