import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { TextField, Button } from "@mui/material";
const TaskForm = ({setIsOpen}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const { addTask } = useContext(AppContext);

  const onAddBtnClicked = () => {
    const data = { name, description, deadline, status: 0 };
    addTask(data);
    setName("");
    setDescription("");
    setDeadline("");
    setIsOpen(false)
  };

  return (
      <form className="TaskForm" onSubmit={(e=>{ onAddBtnClicked(); e.preventDefault()})}>
        <TextField inputProps={{ "data-testid": "name" }} label="Name" required InputLabelProps={{ shrink: true }} variant="outlined" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <TextField inputProps={{ "data-testid": "description" }} label="Description" required InputLabelProps={{ shrink: true }} variant="outlined" type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        <TextField inputProps={{ "data-testid": "deadline" }} label="Deadline" required InputLabelProps={{ shrink: true }} variant="outlined" type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
        <Button type="submit" variant="contained">Add task</Button>
      </form>
  );
};

export default TaskForm;
