import React from 'react';

const RecentActivity = ({isMinimized}) => {
  return (
    <div className={` ${!isMinimized ? 'recent-activity' : 'minimized-recent-activity'}  mt-1 card `}>
      <div className="card-body">
        <h5>Recently Activity</h5>
        <p>You Posted a New Job</p>
        <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
       
        <span> Today you make 12 Activity  </span>
        <button className="btn btn-danger">See All Activity</button>
      </div>
    </div>
  );
};

export default RecentActivity;