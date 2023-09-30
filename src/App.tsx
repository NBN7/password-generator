import { NextUIProvider } from "@nextui-org/react";

import { DataContextProvider } from "./context/dataContext";

import { UserCard } from "./components/UserCard";

function App() {
  return (
    <NextUIProvider className="dark">
      <DataContextProvider>
        <UserCard />
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default App;
