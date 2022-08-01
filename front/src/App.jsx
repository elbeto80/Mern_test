import { Routes, Route } from "react-router-dom";
import TasksPage from "./Pages/TasksPage";
import TasksNew from "./Pages/TasksNew";
import NotFoundPage from "./Pages/NotFoundPage";
import NavBar from "../Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksNew />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
