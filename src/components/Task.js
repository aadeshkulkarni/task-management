import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import UpdateForm from "./UpdateForm";

const Task = ({ task }) => {
  const { removeTask } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const onEditBtnClicked = () => {
    setIsEditing(!isEditing);
  };

  const onDeleteBtnClicked = () => {
    removeTask(task.id);
  };

  if (isEditing) return <UpdateForm task={task} setIsEditing={setIsEditing} />;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ px: 2 }} variant="h5" component="div">
          {task.name}
        </Typography>
        <Typography sx={{ fontSize: 14, p: 2,pb:1 }} color="text.secondary" >
          {task.description}
        </Typography>
        <Typography sx={{ fontSize: 14, px: 2 }} color="text.secondary" gutterBottom>
          {task.deadline}
        </Typography>
        <CardActions>
        
          <Button size="small" onClick={onEditBtnClicked}>
            Edit
          </Button>
          <Button data-testid="deleteBtn" name="delete" size="small" onClick={onDeleteBtnClicked}>
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Task;
