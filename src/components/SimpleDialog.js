import React, { useContext } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import TaskForm from "./TaskForm";
import { DialogContext } from "../context/DialogContext";
function SimpleDialog() {
  const { isOpen, setIsOpen } = useContext(DialogContext);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Create new task</DialogTitle>
      <TaskForm setIsOpen={setIsOpen} />
    </Dialog>
  );
}

export default SimpleDialog;
