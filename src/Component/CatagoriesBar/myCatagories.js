import "./myCatagories.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  //    getPopularVideos,
  getVideosByCategory,
} from "../../Redux/Actions/VideosAction";
const Catagories = () => {
  const keywords = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
  ];
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    console.log(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      setActiveElement(value);
    }
    dispatch(getVideosByCategory(value));
  };

  const AllItems = keywords.map((value, i) => (
    <span
      className={activeElement === value ? "active" : ""}
      key={i}
      onClick={() => handleClick(value)}
    >
      {value}
    </span>
  ));

  return <div className="categoriesBar">{AllItems}</div>;
};

export default Catagories;
