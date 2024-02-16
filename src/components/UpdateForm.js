import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Card, CardContent, CardActions, Button, Typography, TextField, Select, MenuItem } from "@mui/material";

const UpdateForm = ({ task, setIsEditing }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);
  const [status, setStatus] = useState(task.status || 0);

  const { updateTask } = useContext(AppContext);
  const onUpdateBtnClicked = () => {
    updateTask({ ...task, name, description, deadline, status });
    setName("");
    setDescription("");
    setDeadline("");
    setIsEditing(false);
  };
  return (
    <Card variant="outlined">
      <CardContent className="TaskForm">
        <Typography variant="h5" component="div">
          <TextField inputProps={{ "data-testid": "name" }} label="Name" InputLabelProps={{ shrink: true }} variant="outlined" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TextField inputProps={{ "data-testid": "description" }} label="Description" InputLabelProps={{ shrink: true }} variant="outlined" type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <TextField inputProps={{ "data-testid": "deadline" }} label="Deadline" InputLabelProps={{ shrink: true }} variant="outlined" type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Age" onChange={(event) => setStatus(event.target.value)}>
            <MenuItem value={0}>Todo</MenuItem>
            <MenuItem value={1}>In progress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Select>
        </Typography>
        <CardActions>
          <Button variant="contained" onClick={onUpdateBtnClicked}>
            Update task
          </Button>
          <Button variant="contained" onClick={() => setIsEditing(false)}>
            Back
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default UpdateForm;
