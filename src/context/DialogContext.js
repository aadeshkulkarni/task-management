import { createContext, useState } from "react";

export const DialogContext = createContext();

const DialogContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const values = { isOpen, setIsOpen };
  return <DialogContext.Provider value={values}>{children}</DialogContext.Provider>;
};

export default DialogContextProvider
