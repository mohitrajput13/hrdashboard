import { getImages } from "../constants/imagePath";
import '../styles/commonStyle.css'
function Slidebar({isMinimized}){
    
    return <>
        <div  className={` ${!isMinimized ? 'w-25 sidebar':'minized'} flex-column sidebar-style-2 fixed-top`} >
            <div className="logo-header align-center  w-100" >
           {!isMinimized && <img className=" logosmall top_margin ps-2 align-center ms-1 mx-3  " src={getImages().small_logo} /> } 
            <img className={`${!isMinimized ?'logo':'minimized-logo'} top_margin ps-2  align-center  ms-1 mx-3 `} style={{width:'180px'}} src={getImages().logo} />
            
            </div>
            <div className="menubar pt-4">
                <span className=" ps-3 align-center justify-content-center font-size " >MAIN MENU</span>
            <ul className="ps-3 pt-2 nav nav-pills flex-column mb-sm-auto mb-0  align-items-sm-start" id="menu">
                  <li className=" pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().vector}></img></i><span className={` text-danger ms-1 menu-font ${isMinimized ?'w-25':'menu-display'} `}>Dashboard</span>
                      </a>
                  </li>
                  <li className="pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_recruitment}></img></i> <span className={` text-secondary menu-font ms-1 ${isMinimized ?'':'menu-display'} `}>Recruitment</span>
                      </a>
                  </li>

                  <li className="pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_calendar}></img></i><span className={` text-secondary ms-1 menu-font ${isMinimized ?'':'menu-display'} `}>Schedule</span>
                      </a>
                  </li>
                  <li className="pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_employee}></img></i>  <span className={` text-secondary ms-1 menu-font ${isMinimized ?'':'menu-display'} `}>Employee</span>
                      </a>
                  </li>
                  <li className="pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_department}></img></i> <span className={` text-secondary ms-1 menu-font ${isMinimized ?'':'menu-display'} `}>Department</span>
                      </a>
                  </li>
                </ul>
            </div>
            <div className="menu ">
                <span className="font-size ps-3">OTHER</span>
            
            <ul className="ps-3 pt-1 nav nav-pills flex-column mb-sm-auto mb-0  align-items-sm-start" id="menu">
                  <li className="nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_support}></img></i> <span className={` text-secondary ms-1 menu-font ${isMinimized ?'':'menu-display'} `}>Support</span>
                      </a>
                  </li>
                  <li className="pt-1 nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                          <i><img className="menu-item" src={getImages().ic_settings}></img></i> <span className={` text-secondary ms-1 menu-font ${isMinimized ?'':'menu-display'} `}>Setting</span>
                      </a>
                  </li>

                </ul>
            </div>
            <div></div>
        </div>
    </>
}
export default Slidebar;