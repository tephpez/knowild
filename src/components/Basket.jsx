import React from "react";
import { Link } from "react-router-dom";

import Client from "../services/api";


function Basket() {
  return (
    <>
      <div className="section-container basket profPic" id="profile">
        
          <div className="profileInfo"> 
            <div className="username">
              <span>USERNAME</span>
            </div>
            <hr></hr>
            <div className="userInfo">
              <div><span> LOCATION </span></div>
            </div> 
          </div>
              <Link to="/edit-profile">
        <div className="profpic-card">
          <img src="" alt="profile pic"></img>
        </div>
              </Link>
      </div>
      <div className="section-container basket" id="my-finds">
        <button className="category-btn"> mushrooms </button>
        <button className="category-btn"> flowers </button>
        <button className="category-btn"> fruits </button>
        <button className="category-btn"> roots </button>
        <button className="category-btn"> leaves </button>
        <button className="category-btn"> seeds </button>
      </div>
      <div className="section-container basket" id="my-map">
        <span id="park-title"> my map </span>
      </div>
    </>

  );
}

export default Basket;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP
