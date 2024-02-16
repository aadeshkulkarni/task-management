import "./App.css";
import AppContextProvider from "./context/AppContext";
import DialogContextProvider from "./context/DialogContext";
import TaskBoard from "./components/TaskBoard";
import Header from "./components/Header";
import SimpleDialog from "./components/SimpleDialog";

/*
TaskManagement
  - TaskForm
  - TaskBoard
    - Column
      - TaskList
        - Task
*/

function App() {
  return (
    <AppContextProvider>
      <DialogContextProvider>
      <div className="App">
       <Header />
        <TaskBoard />
        <SimpleDialog />
      </div>
      </DialogContextProvider>
    </AppContextProvider>
  );
}

export default App;
