import { Dispatch, createContext, useContext, useState } from "react";

type DataContextType = {
  password: string;
  setPassword: Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<DataContextType | null>(null);

type DataContextProviderProps = {
  children: React.ReactNode;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [password, setPassword] = useState<string>("");

  return (
    <DataContext.Provider value={{ password, setPassword }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};
