import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import sunflower from "../assets/sunflower.png";

const DetailsFinds = ( props ) => {
  const [findDetails, setFindDetails] = useState([null]);

  let { findId } = useParams();

  useEffect(() => {
    const getSelectedFind = async () => {
      if (props.findsContent && props.findsContent.length > 0) {
        let selectedFind = props.findsContent.find(
          (find) => find.id === parseInt(findId)
        );
        setFindDetails(selectedFind);
      }
    };
    getSelectedFind();
  }, [findId, props.findsContent]);

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
              <span className="find-value"> {findDetails.commonName} </span>
            </div>
            <hr></hr>
            <div className="userInfo botanical">
              <div>
                <span className="find-value">
                  {findDetails.botanicalName}
                </span>
              </div>
              <br></br>

              <Link to={"/edit-find/"+findDetails.id}>
                <button className="app-btn earth"> edit find </button>
              </Link>
              <button
                className="app-btn rust"
                id="btn-delete"
                onClick={() => props.handleDelete(findDetails.id)}
              >
                delete
              </button>
            </div>
          </div>
          <br></br>
          <div className="profpic-card">
            <img src={findDetails.picOne} alt="find img"></img>
          </div>
        </div>
        <div className="section-container basket details" id="find-info">
          <div>
            <span className="find-key">DATE FOUND:</span>
            <span className="find-value"> {findDetails.dateFound} </span>
            <br></br>
            <br></br>
            <span className="find-key">BENEFITS:</span>
            <span className="find-value"> {findDetails.benefits} </span>
            <br></br>
            <br></br>
            <span className="find-key">POISON WARNING:</span>
            <span className="find-value"> {findDetails.poisonWarning} </span>
            <br></br>
            <br></br>
            <span className="find-key">NOTES: </span>
            <span className="find-value"> {findDetails.notes} </span>
          </div>
        </div>
        <div className="section-container basket details" id="location-info">
          <div>
            <span className="find-key">ABUNDANCE RATING: </span>
            <span className="find-value">
              {" "}
              {findDetails.abundanceRating}/10{" "}
            </span>

            <br></br>
            <br></br>
            <span className="find-key">LOCATION DESCRIPTION: </span>
            <span className="find-value"> {findDetails.locationDesc} </span>

            <br></br>
            <br></br>
            <span className="find-key">LANDMARKS:</span>
            <span className="find-value"> {findDetails.landmarks} </span>

            <br></br>
            <br></br>
          </div>
          <a href={findDetails.mapsLink} className="button">
            <button className="app-btn rust submit"> FIND ME </button>
          </a>
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

export default DetailsFinds;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  SWEEP
