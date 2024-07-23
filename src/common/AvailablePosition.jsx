import React from "react";
const AvailablePosition = () => {
  const body = [
    {
      id: 1,
      heading: "Available Position",
      position: 24,
      available: "4 Urgently needed",
      color: "#161E54",
      background: "lightyellow",
    },
    {
      id: 2,
      heading: "Job Open",
      position: 10,
      available: "4 Active hiring",
      color: '#161E54',
      background: "#E8F0FB",
    },
    {
      id: 3,
      heading: "New Employees",
      position: 24,
      available: "4 Department",
      color: "#161E54",
      background: '#FDEBF9',
    }
  ];
  return (<>
    {body.map((item)=><div style={{backgroundColor:item.background}} className="available card justify-content-between   ">
      <div  className="card-body ">
             <h6>{item.heading}</h6>
             <h3>{item.position}</h3>
             <span className="text-danger">{item.available}</span>
           </div>
     </div>)
    }
     
  </>);
};

export default AvailablePosition;
