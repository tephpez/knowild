import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = ({ findsContent }) => {
  const [finds, setFinds] = useState([]);
  
  let navigate = useNavigate()

  useEffect(() => {
    const getSelectedFind = async () => {
      if (findsContent) {
        let selectedFind = findsContent
        setFinds(selectedFind);
      }
    };
    getSelectedFind();
  }, [findsContent]);

  const showDetails = (userId, findId) => {
    navigate(`/finds/${userId}/${findId}`);
  };

  return (
    <>
      <div className="section-container home" id="categories">
        <Link to="/Mushrooms">
          <div className="category-card" id="mushrooms">
            <span id="category-title"> mushrooms </span>
          </div>
        </Link>
        <Link to="/Flowers">
          <div className="category-card" id="flowers">
            <span id="category-title"> flowers </span>
          </div>
        </Link>
        <Link to="/Fruits">
          <div className="category-card" id="fruits">
            <span id="category-title"> fruits </span>
          </div>
        </Link>
        <Link to="/Roots">
          <div className="category-card" id="roots">
            <span id="category-title"> roots </span>
          </div>
        </Link>
        <Link to="/Herbs">
          <div className="category-card" id="herbs">
            <span id="category-title"> herbs </span>
          </div>
        </Link>
        <Link to="/Seeds">
          <div className="category-card" id="seeds">
            <span id="category-title"> seeds </span>
          </div>
        </Link>
      </div>

      <div className="section-container home" id="locations">
      {finds.map((find, index) => ( 
        <div className="park-card" key={index} onClick={() => showDetails(find.userId, find.id)}>
          <p className="park-card-title">{find.name}</p>
        </div>
          )) 
          .slice(0, 4)
        } 
      </div>
    </>
  );
}

export default Home;
// {parks.map((park, index) => ( 
// <div className="park-card" key={index} onClick={() => showParkDetails(find.userId, find.id)}> 
// <p className="park-card-title">{find.name}</p>


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  MAPPED         
//  SWEEP

// sequelize model:generate --name User --attributes name:string,password:string,currentLocation:string,profPic:text
// sequelize model:generate --name Park --attributes name:string,mapUrl:text,hours:text,state:string,address:string,city:string,state:string
// sequelize model:generate --name Find --attributes commonName:string,botanicalName:string,benefits:text,category:string,poisonWarning:string,dateFound:dateOnly,notes:text,picOne:text,picTwo:text,picThree:text,picFour:text,picFive:text,mapsLink:text,abundanceRating:integer,locationDesc:text,landmarks:string,userId:integer,parkId:integer
