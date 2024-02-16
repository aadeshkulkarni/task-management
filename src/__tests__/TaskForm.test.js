import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";
import AppContextProvider from "../context/AppContext";
import "@testing-library/jest-dom";

it("should render Taskform component", () => {
  render(
    <AppContextProvider>
      <TaskForm setIsOpen={() => {}} />
    </AppContextProvider>
  );
  const addBtn = screen.getByText("Add task");

  expect(addBtn).toBeInTheDocument();
});

it("should reset the form after successfully creating a new task", () => {
  render(
    <AppContextProvider>
      <TaskForm setIsOpen={() => {}} />
    </AppContextProvider>
  );

  const name = screen.getByTestId("name");
  fireEvent.change(name, { target: { value: "Buy Milk" } });
  const description = screen.getByTestId("description");
  fireEvent.change(description, { target: { value: "dummy description" } });
  const deadline = screen.getByTestId("deadline");
  fireEvent.change(deadline, { target: { value: "2024-10-10" } });

  const addBtn = screen.getByText("Add task");
  fireEvent.click(addBtn)
  
  expect(name).toHaveValue("")
  expect(description).toHaveValue("")
  expect(deadline).toHaveValue("")

});
