import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
          <div className="right">
            <h1 className="title">right</h1>
          </div>
        </div>
        <div className="buttom"></div>
        single
      </div>
    </div>
  );
}
