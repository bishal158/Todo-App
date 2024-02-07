import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import IncompleteTasks from "./pages/IncompleteTasks";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {Header} from "./components/Header.jsx";
library.add(fab, fas);
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<AllTasks />} path="all-tasks" />
        <Route element={<IncompleteTasks />} path="incomplete-tasks" />
        <Route element={<CompletedTasks />} path="completed-tasks" />
      </Routes>
    </>
  );
}

export default App;
