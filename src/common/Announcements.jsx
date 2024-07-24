import React from 'react';
import { getImages } from '../constants/imagePath';
const Announcements = ({isMinimized}) => {
    return (
      <div className="announcement  w-100  d-flex flex-column">
        <div className={`d-flex justify-content-between flex-row ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>
            <div >
              <h5 className={` ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>Announcement</h5>
            </div>
            <div className=''>
              <span className='first-second dropdown-toggle'>Today, 13 Sep 2021 </span>
            </div>
        </div>
         <div className={`d-flex  flex-row announcement-menu ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>
            <div className=''>
              <p>Outing schedule for every departement</p>
              <small>5 Minutes ago</small>
            </div>
            <div className="d-flex">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <div className={`d-flex  flex-row announcement-menu ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>
            <div className=''>
              <p>Meeting HR Departement</p>
              <small>yesterday, 12:30 PM</small>
            </div>
            <div className="d-flex">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <div className={`d-flex  flex-row announcement-menu ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>
            <div className=''>
            <p>IT Department  UX/UI Designer position</p>
            <small>yesterday, 09:15 AM</small>
            </div>
            <div className="d-flex">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <hr/>
        <div className={`d-flex justify-content-center flex-row ${!isMinimized ?'announcement-font':'minimized-announcement-font'}`}>
          <p >See All Announcement</p>
        </div>
      </div>

    
      
    );
  };

export default Announcements;