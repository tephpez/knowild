import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Fruits ({ findsContent }) {

  let navigate = useNavigate()

  const showFindDetails = (findId) => {
    navigate(`/finds/${findId}`);
  };
  
  return (
    <>
      <div className="basket scroll cat-container">
        <span className="park-card-title state-title">FRUITS</span>
        <hr></hr>
        {findsContent
          .filter((find) => find.category === 'fruits')
          .map((find, index) => ( 
            <div className="state-park-card categories" key={index} onClick={() => showFindDetails(find.id)}>
              <div className="profpic-card category-pic">
                <img src={find.picOne} alt="find-img"></img>
              </div>
              <div>
                <p className="park-card-title category-title">{find.commonName}</p>
                <span style={{fontWeight:"1000"}}> FOUND ON: </span> <br></br>
                <span> {find.dateFound}</span>
              </div>
            </div>
            )) 
          } 
        </div>
      </>
  )};


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP
