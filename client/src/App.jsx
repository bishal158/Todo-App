import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import IncompleteTasks from "./pages/IncompleteTasks";
import AllTasks from "./pages/AllTasks";
import CompeletedTasks from "./pages/CompeletedTasks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);
function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route element={<Home />} path="" />
          <Route element={<AllTasks />} path="all-tasks" />
          <Route element={<IncompleteTasks />} path="incomplete-tasks" />
          <Route element={<CompeletedTasks />} path="completed-tasks" />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
