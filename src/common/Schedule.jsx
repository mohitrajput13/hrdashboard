import React from 'react';
import { getImages } from '../constants/imagePath';
const Schedule = () => {

  return (
    <div className="schedule  d-flex flex-column">
      <div className="d-flex justify-content-between flex-row ">
            <div className=''>
            <h6>Upcoming Schedule</h6>
            </div>
            <div className=''>
              <span className='schedule-first-second dropdown-toggle'>Today, 13 Sep 2021 </span>
            </div>
        </div>
      <h6>Priority</h6>
      <div className="d-flex justify-content-between flex-row schedule-menu schedule-font">
            <div className=''>
              <p>Review candidate applications -</p>
              <small> Today, 11:30 AM</small>
            </div>
            <div className=''>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <h6>Other</h6>
        <div className="d-flex justify-content-between flex-row schedule-menu schedule-font">
            <div className=''>
              <p>Interview with candidates </p>
              <small> Today, 11:30 AM</small>
            </div>
            <div className=''>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <div className="d-flex justify-content-between flex-row schedule-menu schedule-font">
            <div className=''>
              <p>Short meeting with product designer from IT Department</p>
              <small> Today, 11:30 AM</small>
            </div>
            <div className=''>
                            <a className="me-3 my-3" style={{ textDecoration: "none" }}>
                                <img src={getImages().carbon} alt="Icon" /> 
                                
                            </a>
            </div>
        </div>
        <hr/>
        <div className="d-flex justify-content-center flex-row schedule-font ">
          <p className='py-1'>Create a New Schedule</p>
        </div>

    </div>
  );
};

export default Schedule;