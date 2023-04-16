import React, { useState }from "react";
import { Link } from "react-router-dom";




function Nav() {
  

  return (
    <div id="nav">

      <Link to="/all-finds">
        <button className="app-btn earth"> all finds </button>
      </Link>

      <Link to="/locations">
        <button className="app-btn earth"> locations </button>
      </Link>

      <Link to="/my-basket">
        <button className="app-btn rust" style={{marginTop:"10px"}}> my basket </button>
      </Link>

      <Link to="/add-find">
        <button className="app-btn fog"> add find </button>
      </Link>

      <Link to="/add-park">
        <button className="app-btn fog"> add park </button>
      </Link>

    </div>
  );
}

export default Nav;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP