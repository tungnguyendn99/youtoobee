import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./categories.scss";

import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keywords = [
  "All",
  "Javascript",
  "React Js",
  "Redux",
  "API",
  "Coding",
  "Football",
  "Music",
  "News",
  "Gym",
  "Cooking",
  "League of Legends",
  "Billiards",
  "Chess",
  "Guitar",
  "Piano",
  "Travel",
  "Fashion",
  "Architecture",
];

const Categories = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="CategoriesBar">
      {keywords.map((value, index) => (
        <span
          onClick={() => handleClick(value)}
          key={index}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
