import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AllCategories ({ findsContent }) {

  let navigate = useNavigate()

  const showFindDetails = (findId) => {
    navigate(`/finds/${findId}`);
  };
  
  return (
    <>
      <div className="basket scroll">
        <span className="park-card-title state-title">MUSHROOMS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'mushrooms')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">FLOWERS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'flowers')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">FRUITS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'fruits')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">ROOTS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'roots')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">HERBS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'herbs')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">SEEDS</span>
        <hr></hr>
        <div className="scroll-wrap">
        {findsContent
          .filter((find) => find.category === 'seeds')
          .map((find, index) => ( 
          <div className="state-park-card" key={index} onClick={() => showFindDetails(find.id)}>
            <p className="park-card-title">{find.commonName}</p>
          </div>
            )) 
          } 
        </div>
      </div>
    </>
  );
}


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   
//  SWEEP
