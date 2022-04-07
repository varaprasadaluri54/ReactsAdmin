import "./sidebar.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr id="hr" />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <GridViewIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>User</span>
          </li>
          <li>
            <PrecisionManufacturingIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Service</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <InsertDriveFileIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  );
}
