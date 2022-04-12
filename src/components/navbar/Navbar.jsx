import SearchIcon from "@mui/icons-material/Search";
import "./navbar.scss";
import LanguageIcon from "@mui/icons-material/Language";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export default function Navbar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input id="input" type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <NightlightRoundIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg?cs=srgb&dl=pexels-nitin-dhumal-249210.jpg&fm=jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
