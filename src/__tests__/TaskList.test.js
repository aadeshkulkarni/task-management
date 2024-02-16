import { screen, render, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";
import "@testing-library/jest-dom";
import { AppContext } from "../context/AppContext";
const TASKS = [
  {
    id: "0001",
    name: "Task1",
    description: "Description1",
    deadline: "2023-10-10",
    status: 0,
  },
];

it("should render the Tasklist component for status = todo", () => {
  render(
    <AppContext.Provider value={{ taskList: TASKS, setTaskList:()=>{}, addTask:()=>{}, removeTask:()=>{}, updateTask:()=>{}, sortByName:()=>{} }}>
      <TaskList status={0} />
    </AppContext.Provider>
  );

  const tasklistTitle = screen.getByRole("heading");
  expect(tasklistTitle.textContent).toEqual("Todo");
});

it("should render the Tasklist component for status = inprogress", () => {
  render(
    <AppContext.Provider value={{ taskList: TASKS }}>
      <TaskList status={1} />
      </AppContext.Provider>
  );

  const tasklistTitle = screen.getByRole("heading");
  expect(tasklistTitle.textContent).toEqual("In Progress");
});

it("should render the Tasklist component for status = complete", () => {
  render(
    <AppContext.Provider value={{ taskList: TASKS }}>
      <TaskList status={2} />
      </AppContext.Provider>
  );

  const tasklistTitle = screen.getByRole("heading");
  expect(tasklistTitle.textContent).toEqual("Complete");
});
