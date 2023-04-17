import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mushrooms ({ findsContent }) {

  let navigate = useNavigate()

  const showFindDetails = (findId) => {
    navigate(`/finds/${findId}`);
  };
  
  return (
    <>
      <div className="basket scroll cat-container">
        <span className="park-card-title state-title">MUSHROOMS</span>
        <hr></hr>
        {findsContent
          .filter((find) => find.category === 'mushrooms')
          .map((find, index) => ( 
            <div className="state-park-card categories" key={index} onClick={() => showFindDetails(find.id)}>
              <div className="profpic-card category-pic">
                <img src={find.picOne} alt="find-img"></img>
              </div>
              <div>
                <p className="park-card-title category-title">{find.commonName}</p>
              </div>
            </div>
            )) 
          } 
      </div>
      </>
  )};

