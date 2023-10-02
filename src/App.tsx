import { NextUIProvider } from "@nextui-org/react";

import { DataContextProvider } from "./context/dataContext";

import { PasswordCard } from "./components/PasswordCard";

function App() {
  return (
    <NextUIProvider className="dark">
      <DataContextProvider>
        <PasswordCard />
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default App;
