import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import sunflower from "../assets/sunflower.png";

const DetailsFinds = (props) => {
  const [findDetails, setFindDetails] = useState([null]);

  /* useEffect(() => {
     const getSelectedFind = async () =>{
       if (props.findsContent && props.findsContent.length > 0){
        let selectedFind = props.findContent.find(
          (find) => movie.id === parseInt(id)
        );
        setFindDetails(selectedFind);
      };
    }   
     getSelectedFind();
   }, [id, props.findContent]);
*/
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
            <span className="find-value"> date goes here </span>
            <span className="find-value"> {findDetails.dateFound} </span>
            <br></br>
            <br></br>
            <span className="find-key">BENEFITS:</span>
            <span className="find-value"> benefits info goes here </span>
            <span className="find-value"> {findDetails.benefits} </span>
            <br></br>
            <br></br>
            <span className="find-key">POISON WARNING:</span>
            <span className="find-value"> toxicity info goes here </span>
            <span className="find-value"> {findDetails.poisonWarning} </span>
            <br></br>
            <br></br>
            <span className="find-key">NOTES: </span>
            <span className="find-value">
              notes info goes here notes info goes herenotes info goes herenotes
              info goes herenotes info goes herenotes info goes herenotes info
              goes here
            </span>
            <span className="find-value"> {findDetails.notes} </span>
          </div>
        </div>
        <div className="section-container basket details" id="location-info">
          <div>
            <span className="find-key">ABUNDANCE RATING: </span>
            <span className="find-value"> abundance rating goes here </span>
            <span className="find-value"> {findDetails.abundanceRating} </span>

            <br></br>
            <br></br>
            <span className="find-key">LOCATION DESCRIPTION: </span>
            <span className="find-value">
              location description info goes here
            </span>
            <span className="find-value"> {findDetails.locationDesc} </span>

            <br></br>
            <br></br>
            <span className="find-key">LANDMARKS:</span>
            <span className="find-value"> landmark info info goes here </span>
            <span className="find-value"> {findDetails.landmarks} </span>

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

export default DetailsFinds;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  SWEEP
