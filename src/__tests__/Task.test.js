import { fireEvent, render, screen } from "@testing-library/react";
import Task from "../components/Task";
import "@testing-library/jest-dom";
import AppContextProvider from "../context/AppContext";

const taskData = {
  name: "Task1",
  description: "Description1",
  deadline: "2023-10-10",
  status: 0,
};
it("should render task component with edit and delete buttons", () => {
  render(
    <AppContextProvider>
      <Task task={taskData} />
    </AppContextProvider>
  );
  const editButton = screen.getByText("Edit");
  expect(editButton).toBeInTheDocument();
  const deleteButton = screen.getByText("Delete");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(editButton)
  expect(editButton).not.toBeInTheDocument();
});

it("should delete the task when delete button is clicked", () => {
  render(
    <AppContextProvider>
      <Task task={taskData} />
    </AppContextProvider>
  );
  
  const deleteButton = screen.getByText("Delete");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton)
});

it("should render task component with the correct taskname", () => {
  render(
    <AppContextProvider>
      <Task task={taskData} />
    </AppContextProvider>
  );
  const taskTitle = screen.getByText("Task1");
  expect(taskTitle).toBeInTheDocument();

  const taskDescription = screen.getByText("Description1");
  expect(taskDescription).toBeInTheDocument();

});

