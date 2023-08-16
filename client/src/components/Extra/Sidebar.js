import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as SiIcons from "react-icons/si";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import Footer from "./Footer";
import "./Footer.css";
import "./Navbar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [activeAspect, setActiveAspect] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {/* Toggle button for showing or hiding the sidebar */}
          {/* <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {/* Close button */}
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                {/* Change the color using inline styles */}
                <SiIcons.SiGoldenline
                  style={{ color: "goldenrod", fontSize: "3.5rem" }}
                  />
              </Link>
            </li>
            {/* Render the menu items */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Footer />
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
