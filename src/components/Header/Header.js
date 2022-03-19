import React, { useState, useEffect } from "react";
import "./header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const auth = useSelector((state) => state.auth);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      setPhoto(auth.user.photoURL);
    }
  }, []);

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/" className="header__logo">
        <img
          src="https://cdn.dribbble.com/users/1487024/screenshots/15183358/media/31f427218a4ebd69bc37b6fd0116cdd1.jpg?compress=1&resize=400x300&vertical=top"
          alt=""
        />
        <h1>YouTooBee</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={25} />
        </button>
      </form>

      <div className="header__icons">
        <MdApps size={28} />
        <MdNotifications size={28} />
        <img src={photo} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
