import { useDispatch } from "react-redux";
import "./mySlideBar.css";
import { log_out } from "../../Redux/Actions/Actions";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
const SlideBar = ({ slideBar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
   dispatch(log_out())
  };
  return (
    <nav
      className={slideBar ? "sidebar open" : "ssidebar close"}
      onClick={() => {
        // handleToggleSidebar(false);
      }}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>

      <hr />

      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
};

export default SlideBar;
