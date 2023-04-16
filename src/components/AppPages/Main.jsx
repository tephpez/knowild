import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Basket from "../Basket";
import Home from "../Home";
import Parks from "../Parks";
import Nav from "./Nav";
import Categories from "../Categories";
import AddFind from "../AddFind";
import AddPark from "../AddPark";
import FindsDetails from "../FindsDetails"
import ParkDetails from "../ParkDetails"
import EditFind from "../EditFind";

import Mushrooms from "../CategoryPages/Mushrooms";
import Flowers from "../CategoryPages/Flowers";
import Fruits from "../CategoryPages/Fruits"
import Roots from "../CategoryPages/Roots";
import Herbs from "../CategoryPages/Herbs";
import Seeds from "../CategoryPages/Seeds";

const Main = ({ findsContent }) => {
    const [finds, setFinds] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
      const getSelectedFind = async () => {
        if (findsContent) {
          let selectedFind = findsContent;
          setFinds(selectedFind);
        }
      };
      getSelectedFind();
    }, [findsContent]);

    const showDetails = (userId, findId) => {
      navigate(`/finds/${userId}/${findId}`);
    };

  return (
    <div id="page-format">
      <Nav />
      <div id="component-format" style={{flexDirection: 'column'}}>
        <Routes>
          
          <Route path="/" element={<Home findsContent={findsContent}/>}/>
          <Route path="/my-basket" element={<Basket findsContent={findsContent}/>}/>
          <Route path="/parks" element={<Parks />}/>
          <Route path="/all-finds" element={<Categories findsContent={findsContent} />}/>
          <Route path="/add-find" element={<AddFind />}/>
          <Route path="/add-park" element={<AddPark />}/>
          <Route path="/all-finds/details" element={<FindsDetails />}/>
          <Route path="/parks/park-info" element={<ParkDetails />}/>
          <Route path="/edit-find" element={<EditFind />}/>
          <Route path="/mushrooms" element={<Mushrooms findsContent={findsContent} />}/>
          <Route path="/flowers" element={<Flowers findsContent={findsContent} />}/>
          <Route path="/fruits" element={<Fruits findsContent={findsContent} />}/>
          <Route path="/roots" element={<Roots findsContent={findsContent} />}/>
          <Route path="/herbs" element={<Herbs findsContent={findsContent} />}/>
          <Route path="/seeds" element={<Seeds findsContent={findsContent} />}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;






//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP
