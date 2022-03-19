import React, { useState } from "react";
import "./sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdExplore,
} from "react-icons/md";

import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logOutHandle = () => {
    dispatch(log_out());
  };

  const [activeSidebar, setActiveSidebar] = useState("Home");

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <NavLink to="/">
        <MdHome size={23} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/feed/subscriptions">
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </NavLink>

      <NavLink to="/library">
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </NavLink>

      <NavLink to="/history">
        <MdHistory size={23} />
        <span>History</span>
      </NavLink>

      <NavLink to="/liked">
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </NavLink>

      <NavLink to="/explore">
        <MdExplore size={23} />
        <span>Explore</span>
      </NavLink>

      <hr />

      <NavLink to="/auth" onClick={() => logOutHandle()}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </NavLink>

      <hr />
    </nav>
  );
};

export default SideBar;
