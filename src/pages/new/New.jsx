import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/Navbar";
import "./new.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

export default function New() {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="Name and Surname" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="mail" placeholder="test@test.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="9999999999" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="H.no:--- India" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="India" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
