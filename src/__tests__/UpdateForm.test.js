import { render, screen, fireEvent } from "@testing-library/react";
import UpdateForm from "../components/UpdateForm";
import "@testing-library/jest-dom";
import AppContextProvider, { AppContext } from "../context/AppContext";

const task = {
  name: "Task1",
  description: "Description1",
  deadline: "2023-10-10",
  status: 0,
};

it("should render the update form with update button", () => {
  render(
    <AppContextProvider>
      <UpdateForm task={task} setIsEditing={() => {}} />
    </AppContextProvider>
  );

  const updateBtn = screen.getByText("Update task");
  expect(updateBtn).toBeInTheDocument();
  fireEvent.click(updateBtn)
});

it("should render the name input with the correct value", () => {
  render(
    <AppContextProvider>
      <UpdateForm task={task} setIsEditing={() => {}} />
    </AppContextProvider>
  );

  
  const name = screen.getByTestId("name");
  fireEvent.change(name, { target: { value: "Buy Milk" } });
  const description = screen.getByTestId("description");
  fireEvent.change(description, { target: { value: "dummy description" } });
  const deadline = screen.getByTestId("deadline");
  fireEvent.change(deadline, { target: { value: "2024-10-10" } });
  
  const updateBtn = screen.getByText("Update task");
  fireEvent.click(updateBtn);
  expect(name).toHaveValue("");
});
