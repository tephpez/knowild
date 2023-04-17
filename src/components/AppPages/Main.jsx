import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Basket from "../Basket";
import Home from "../Home";
import Nav from "./Nav";
import AllParks from "../AllParks";
import AllCategories from "../AllCategories";
import AddFind from "../AddFind";
import AddPark from "../AddPark";
import DetailsFinds from "../DetailsFinds";
import DetailsParks from "../DetailsParks";
import EditFind from "../EditFind";
import EditPark from "../EditPark";
import Mushrooms from "../CategoryPages/Mushrooms";
import Flowers from "../CategoryPages/Flowers";
import Fruits from "../CategoryPages/Fruits"
import Roots from "../CategoryPages/Roots";
import Herbs from "../CategoryPages/Herbs";
import Seeds from "../CategoryPages/Seeds";

const Main = (props) => {
  const { findsContent, parksContent, handleDelete, getData } = props;

    const [finds, setFinds] = useState([]);
    const [parks, setParks] = useState([]);

    let navigate = useNavigate();

// FINDS
    useEffect(() => {
      const getSelectedFind = async () => {
        if (findsContent) {
          let selectedFind = findsContent;
          setFinds(selectedFind);
        }
      };
      getSelectedFind();
    }, [findsContent]);

    const showFindDetails = (userId, findId) => {
      navigate(`/finds/${userId}/${findId}`);
    };



// PARKS
    useEffect(() => {
      const getSelectedPark = async () => {
        if (parksContent) {
          let selectedPark = parksContent;
          setParks(selectedPark);
        }
      };
    }, [parksContent]);

    const showparkDetails = (parkId, findId) => {
      navigate(`/parks/${parkId}`);
    };



  return (
    <div id="page-format">
      <Nav />
      <div id="component-format" style={{flexDirection: 'column'}}>
        <Routes>
          <Route path="/" element={<Home parksContent={parksContent}/>}/>
          <Route path="/my-basket" element={<Basket 
                                              findsContent={findsContent}
                                              parksContent={parksContent}/>}/>
          <Route path="/parks" element={<AllParks parksContent={parksContent}/>}/>
          <Route path="/finds" element={<AllCategories findsContent={findsContent}/>}/>
          <Route path="/add-find" element={<AddFind  findsContent={findsContent}
                                                     parksContent={parksContent}/>}/>
          <Route path="/add-park" element={<AddPark parksContent={parksContent}/>}/>
          <Route path="/finds/:findId" element={<DetailsFinds findsContent={findsContent}
                                                              handleDelete={ handleDelete }/>}/>
          <Route path="/parks/:parkId" element={<DetailsParks parksContent={parksContent}/>}/>
          <Route path="/edit-find/:findId" element={<EditFind findsContent={findsContent}
                                                      parksContent={parksContent}
                                                      getData={getData}/>}/>
          <Route path="/edit-park/:parkId" element={<EditPark parksContent={parksContent}
                                                              getData={getData}/>}/>
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



