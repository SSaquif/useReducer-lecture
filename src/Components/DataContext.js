// Exercise 7
import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [status, setStatus] = useState({
    data: null,
    status: "idle"
  });

  // We need actions to:
  // - start fetching data from the server
  // - receive data from the server
  // - receive an error from the server

  return (
    <DataContext.Provider value={{ status, setStatus }}>
      {children}
    </DataContext.Provider>
  );
};
