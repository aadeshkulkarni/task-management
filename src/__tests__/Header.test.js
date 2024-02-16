import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../components/Header";
import DialogContextProvider from "../context/DialogContext";

it("should render Header component with a Create task button", () => {
  render(
    <DialogContextProvider>
      <Header />
    </DialogContextProvider>
  );
  const newTaskBtn = screen.getByText("Create new task");
  expect(newTaskBtn).toBeInTheDocument();
});
