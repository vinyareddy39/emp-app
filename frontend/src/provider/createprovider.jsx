import { createContext, useState } from "react";

// create context object
export const counterContextObject = createContext();

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const changeCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <counterContextObject.Provider value={{ counter, changeCounter }}>
      {children}
    </counterContextObject.Provider>
  );
}

export default ContextProvider;
