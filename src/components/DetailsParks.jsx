import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import sunflower from "../assets/sunflower.png";

const DetailsParks = ({ parksContent }) => {
  const { parkId } = useParams();
  
  const [parkDetails, setParkDetails] = useState([null]);
  // const []

  /* useEffect(() => {
     const getSelectedFind = async () =>{
       if (props.findsContent && props.findsContent.length > 0){
         (find) => movie.id === parseInt(id)
         let selectedFind = props.findContent.find(
        );
        setFindDetails(selectedFind);
      }   
     };
     getSelectedFind();
   }, [id, props.findContent]);
*/

// {parks.map((park, index) => ( 
//   <div className="category-card park" key={index} onClick={() => showParkDetails(park.id)}>
//     <p className="park-card-title">{park.name}</p>
//   </div>
//     )) 
//     .slice(0, 3)
//   } 

  useEffect(() => {
    const getSelectedPark = async () => {
      if (parksContent && parksContent.length>0) {
        let selectedPark = parksContent.find(
          (parks) => parks.id === parseInt(parkId)
        );
        setParkDetails(selectedPark);
      }
    }
    getSelectedPark();
  }, [parkId, parksContent]);


console.log(parkDetails)
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
              <span>COMMON NAME</span>
            </div>
            <hr></hr>
            <div className="userInfo botanical">
              <div>
                <span> BOTANICAL NAME </span>
              </div>
              <br></br>

              <Link to="/edit-find">
                <button className="app-btn earth"> edit find </button>
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
            <span className="find-key">DATE FOUND:</span>
            <span className="find-value"> {parkDetails.name} </span>
            <br></br>
            <br></br>
            <span className="find-key">BENEFITS:</span>
            <span className="find-value"> {parkDetails.hours} </span>
            <br></br>
            <br></br>
            <span className="find-key">POISON WARNING:</span>
            <span className="find-value"> {parkDetails.address} </span>
            <br></br>
            <br></br>
            <span className="find-key">NOTES: </span>
            <span className="find-value">
              notes info goes here notes info goes herenotes info goes herenotes
              info goes herenotes info goes herenotes info goes herenotes info
              goes here
            </span>
            <span className="find-value"> {parkDetails.notes} </span>
          </div>
        </div>
        <div className="section-container basket details" id="location-info">
          <div>
            <span className="find-key">ABUNDANCE RATING: </span>
            <span className="find-value"> abundance rating goes here </span>
            <span className="find-value"> {parkDetails.abundanceRating} </span>

            <br></br>
            <br></br>
            <span className="find-key">LOCATION DESCRIPTION: </span>
            <span className="find-value">
              location description info goes here
            </span>
            <span className="find-value"> {parkDetails.locationDesc} </span>

            <br></br>
            <br></br>
            <span className="find-key">LANDMARKS:</span>
            <span className="find-value"> landmark info info goes here </span>
            <span className="find-value"> {parkDetails.landmarks} </span>

            <br></br>
            <br></br>
          </div>
          <button className="app-btn rust submit"> FIND ME </button>
        </div>
      </div>
      <div>
        <img className="forager-img sunflower" src={sunflower} alt="sunflower-img" />
      </div>
    </div>
  );
};

export default DetailsParks;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  SWEEP
