import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Tables from "../../components/table/Table";
export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Name</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">test@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">9999999999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
            {/* <h1 className="title">right</h1> */}
          </div>
        </div>
        <div className="singleBottom">
          <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
}
