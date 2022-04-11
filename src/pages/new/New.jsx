import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/Navbar";
import "./new.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function New({ inputs, title }) {
  const [file, setFile] = useState("");
  // console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
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
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
