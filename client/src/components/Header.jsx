import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Header.css";
const routes = [
  {
    name: "Home",
    path: "",
    icon: "fa-solid fa-home",
  },
  {
    name: "All Your Tasks",
    path: "/all-tasks",
    icon: "fa-solid fa-list",
  },
];
export const Header = () => {
  return (
    <div className={"header"}>
      {routes.map((route, index) => (
        <NavLink className={"nav-link"} to={route.path} key={index}>
          <FontAwesomeIcon icon={route.icon} />
        </NavLink>
      ))}
    </div>
  );
};
