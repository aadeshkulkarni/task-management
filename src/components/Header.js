import React, { useContext } from "react";
import { Button } from "@mui/material";
import { DialogContext } from "../context/DialogContext";
const Header = () => {
  const { setIsOpen } = useContext(DialogContext);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className="Header">
      <h2>Task Management</h2>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create new task
      </Button>
    </header>
  );
};

export default Header;
