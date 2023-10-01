import { Divider } from "@nextui-org/react";

import { PasswordGenerator } from "./PasswordGenerator";
import { PasswordInput } from "./PasswordInput";

export const UserCard = () => {
  return (
    <main className="select-none w-full sm:h-screen flex justify-center p-4">
      <section className="w-full sm:w-[400px] flex flex-col sm:justify-center gap-2 p-4">
        <h2 className="text-2xl">Password Generator</h2>

        <Divider className="my-4" />

        <PasswordInput />

        <Divider className="my-4" />

        <PasswordGenerator />
      </section>
    </main>
  );
};
