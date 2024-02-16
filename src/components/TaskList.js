import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Task from "./Task";

const TaskList = ({ status }) => {
  const { taskList } = useContext(AppContext);
  if(taskList.length === 0) return <div></div>
  const setTitle = (status) => {
    switch(status){
      case 0: return "Todo"
      case 1: return "In Progress"
      case 2: return "Complete"
      default: return
    }
  }
  return (
    <div>
      <h2 data-testid="tasktype" className="TaskTitle">{setTitle(status)}</h2>
      {taskList.length > 0 && taskList.filter((task) => task.status === status).map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;
