import Slidebar from "./components/Slidebar";
import Navbar from './components/Navbar'
import { useState } from "react";
import AvailablePosition from "./common/AvailablePosition";
import RecentActivity from "./common/RecentActivity";
import TotalEmployees from "./common/TotalEmployees";
import Announcements from "./common/Announcements";
import Schedule from "./common/Schedule";
function App() {
  const [minimized, setMinimized] = useState(false);
  console.log(minimized);
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };
  return <>
    <div className="mainDiv">
      <Slidebar isMinimized={minimized} />
      <div className={` ${minimized ? 'appDiv' : 'minizedAppDiv'}`}>
        <Navbar isMinimized={minimized} setMinimized={setMinimized} />
        <div className=" w-100 p-1" style={{border:"1px solid red"}}>
          <div className="d-flex w-100 justify-content-between flex-column p-2" >
            <div>
              <h4>Dashboard</h4>
            </div>
            <div className="all-component d-flex flex-row">
              <div  className=" d-flex flex-column ">
                <div className="d-flex flex-row " >
                  <AvailablePosition/>
                </div>
                <div className="d-flex flex-row pt-2">
                  <TotalEmployees />
                </div>
                <div className="d-flex flex-row pt-2">
                  <Announcements/>
                </div>
              </div>
              <div className="d-flex flex-column">
                <RecentActivity />
                <Schedule/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default App;
