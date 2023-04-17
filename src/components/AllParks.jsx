import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllParks ({ parksContent }) {

  let navigate = useNavigate()

  const showParkDetails = (parkId) => {
    navigate(`/parks/${parkId}`);
  };
  return (
    <>
      <div className="basket scroll">
        <span className="park-card-title state-title">PA</span>
        <hr></hr>
        <div className="scroll-wrap">
        {parksContent
          .filter((park) => park.state === 'PA')
          .map((park, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showParkDetails(park.id)}>
            <p className="park-card-title">{park.name}</p>
            <img className="mapped-img" src={park.parkImg} alt="find-img"></img>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">NJ</span>
        <hr></hr>
        <div className="scroll-wrap">
        {parksContent
            .filter((park) => park.state === 'NJ')
            .map((park, index) => ( 
            <div className="state-park-card" key={index} onClick={() => showParkDetails(park.id)}>
              <p className="park-card-title">{park.name}</p>
              <img className="mapped-img" src={park.parkImg} alt="find-img"></img>
            </div>
              )) 
            } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">MD</span>
        <hr></hr>
        <div className="scroll-wrap">
        {parksContent
            .filter((park) => park.state === 'MD')
            .map((park, index) => ( 
            <div className="state-park-card" key={index} onClick={() => showParkDetails(park.id)}>
              <p className="park-card-title">{park.name}</p>
              <img className="mapped-img" src={park.parkImg} alt="find-img"></img>
            </div>
              )) 
            } 
        </div>
      </div>

    </>
  );
}
