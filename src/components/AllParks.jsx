import React from "react";
import { Link } from "react-router-dom";

function AllParks() {
  return (
    <>
      <div className="basket scroll">
        <span className="park-card-title state-title">PA</span>
        <hr></hr>
        <div className="scroll-wrap">
        <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
        <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
        <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
        <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
        <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
         <Link to="/info">
          <button className="state-park-card"></button>
        </Link>
        </div>
      </div>
      <div className="basket scroll">
        <span className="park-card-title state-title">NJ</span>
        <hr></hr>
        <div className="scroll-wrap">
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
          <button className="state-park-card"></button>
        </div>
      </div>

    </>
  );
}

export default AllParks;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP
