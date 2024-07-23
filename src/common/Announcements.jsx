import React from 'react';
import { getImages } from '../constants/imagePath';
const Announcements = () => {
    return (
      <div className="announcement p-1  d-flex flex-column">
        <div className="d-flex justify-content-between flex-row ">
            <div className=''>
              <h5>Announcement</h5>
            </div>
            <div className=''>
              <span className='first-second dropdown-toggle'>Today, 13 Sep 2021 </span>
            </div>
        </div>
         <div className="d-flex justify-content-between flex-row announcement-menu">
            <div className=''>
              <p>Outing schedule for every departement</p>
              <small>5 Minutes ago</small>
            </div>
            <div className="">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
       <div className="d-flex justify-content-between flex-row announcement-menu">
            <div className=''>
              <p>Meeting HR Departement</p>
              <small>yesterday, 12:30 PM</small>
            </div>
            <div className="">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <div className="d-flex justify-content-between flex-row announcement-menu">
            <div className=''>
            <p>IT Department  UX/UI Designer position</p>
            <small>yesterday, 09:15 AM</small>
            </div>
            <div className="">
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().bi_pin} alt="Icon" /> 
                                
                            </a>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <hr/>
        <div className="d-flex justify-content-center flex-row">
          <p >See All Announcement</p>
        </div>
      </div>

    
      
    );
  };

export default Announcements;