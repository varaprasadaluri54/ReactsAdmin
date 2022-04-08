import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/Navbar";
import "./new.scss";

export default function New() {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
      </div>
    </div>
  );
}
