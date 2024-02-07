import './styles/Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
function Sidebar({children}) {
  const sidebarItems = [
    {
      name: "All Your Tasks",
      path: "/all-tasks",
      icon: "fa-solid fa-clipboard-check",
    },
    {
      name: "Incomplete Tasks",
      path: "/incomplete-tasks",
      icon: "fa-solid fa-clipboard-check",
    },
    {
      name: "Completed Tasks",
      path: "/completed-tasks",
      icon: "fa-solid fa-clipboard-check",
    },
  ];
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
          </div>
        </div>
        {sidebarItems.map((item,index)=>{
            return(
                <NavLink className={'link'} to={item.path} key={index}>
                    <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
                    <div className="link_name">{item.name}</div>
                </NavLink>
            )
        })}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
