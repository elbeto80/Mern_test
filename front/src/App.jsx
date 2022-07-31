import { Routes, Route } from "react-router-dom";
import TasksPage from "./Pages/TasksPage";
import TasksNew from "./Pages/TasksNew";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<TasksNew />} />
      <Route path="*" element={<NotFoundPagenpm />} />
    </Routes>
  );
};

export default App;
