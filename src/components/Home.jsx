import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = ({ parksContent }) => {
  const [parks, setParks] = useState([]);
   
  let navigate = useNavigate()
  
  useEffect(() => {
    const getSelectedPark = async () => {
      if (parksContent) {
        let selectedPark = parksContent
        setParks(selectedPark);
      }
    };
    getSelectedPark();
  }, [parksContent]);

  const showParkDetails = (parkId) => {
    navigate(`/parks/${parkId}`);
  };

  return (
    <>
      <div className="section-container home" id="categories">
        <Link to="/Mushrooms">
          <div className="category-card" id="mushrooms">
            <span id="category-title"> mushrooms </span>
            {/* <p>{park.name}</p> */}
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
      </div><br></br>
      <hr style={{borderColor:"#AB8A75", width:"85%"}}></hr><br></br>
      <div className="section-container" id="locations">
        {parks.map((park, index) => ( 
          <div className="category-card park park-info" key={index} onClick={() => showParkDetails(park.id)}>
            <p className="park-card-title">{park.name}</p>
            <img className="mapped-img" src={park.parkImg} alt="find-img"></img>
          </div>
            )) 
            .slice(0, 3)
          } 
      </div>
    </>
  );
}

export default Home;
