import React from 'react';
import { getImages } from '../constants/imagePath';
const TotalEmployees= ({isMinimized}) => {
 const data =[{
    id: 1,
    heading: "Total Employees",
    position: 216,
    color: "#161E54",
    background: "lightyellow",
    image:getImages().frame52
  },{
      id: 2,
      heading: "Talent Request",
      position: 16,
      color: "#161E54",
      background: "lightyellow",
      image:getImages().frame52
    }]
    return (<>
      {data.map((item)=><div className={` ${!isMinimized ? 'total-employees' : 'minized-total-employees'}  d-flex flex-row`}>
        <div >
          <h6>{item.heading}</h6>
          <h3>{item.position}</h3>
        </div>
        <div >
            <img src={item.image}></img>
        </div>
      </div>)}
      </>
    );
  };

export default TotalEmployees;