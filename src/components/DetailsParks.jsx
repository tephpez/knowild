import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import sunflower from "../assets/sunflower.png";

const DetailsParks = ({ parksContent }) => {
  const { parkId } = useParams();

  const [parkDetails, setParkDetails] = useState([null]);

  useEffect(() => {
    const getSelectedPark = async () => {
      if (parksContent && parksContent.length > 0) {
        let selectedPark = parksContent.find(
          (parks) => parks.id === parseInt(parkId)
        );
        setParkDetails(selectedPark);
      }
    };
    getSelectedPark();
  }, [parkId, parksContent]);

  console.log(parkDetails);
  return (
    <div className="details-page">
      <div className="details-container">
        <Link to="/category">
          <button className="app-btn rust submit margin"> CATEGORY </button>
          <br></br>
        </Link>
        <br></br>
        <div className="section-container basket profPic" id="details">
          <div className="profileInfo">
            <div className="username">
              <span className="find-value"> {parkDetails.name} </span>
            </div>
            <hr></hr>
            <div className="userInfo botanical">
              <div></div>
              <br></br>

              <Link to="/edit-find">
                <button className="app-btn earth"> edit park </button>
              </Link>
            </div>
          </div>
          <br></br>
          <div className="profpic-card">
            <img src="" alt="find img"></img>
          </div>
        </div>
        <div className="section-container basket details" id="find-info">
          <div>
            <span className="find-key">HOURS: </span>
            <span className="find-value"> {parkDetails.hours} </span>
            <br></br>
            <br></br>
            <span className="find-key">ADDRESS: </span>
            <span className="find-value"> {parkDetails.address} </span>
            <br></br>
            <br></br>
            <span className="find-key">CITY: </span>
            <span className="find-value"> {parkDetails.city} </span>
            <br></br>
            <br></br>
            <span className="find-key">STATE: </span>
            <span className="find-value"> {parkDetails.state} </span>
            <br></br>
            <br></br>
            <span className="find-key">ZIP: </span>
            <span className="find-value"> {parkDetails.zip} </span>
            <br></br>
            <br></br>
            <a href={parkDetails.mapUrl} className="button">
              <button className="app-btn rust submit"> DIRECTIONS </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          className="forager-img sunflower"
          src={sunflower}
          alt="sunflower-img"
        />
      </div>
    </div>
  );
};

export default DetailsParks;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  MAPPED   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP