import React from 'react';

const RecentActivity = () => {
  return (
    <div className="recent-activity card mb-3">
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