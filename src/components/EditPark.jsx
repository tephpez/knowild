//
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Client } from "../services/api";
import axios from "axios";

import forager from "../assets/forager.png";

const EditPark = ({ findsContent, parksContent, getData }) => {

  const [parkDetails, setParkDetails] = useState([null]);
  let navigate = useNavigate();
  let {parkId} = useParams();
  
  const [formValues, setFormValues] = useState({
    id: parkId,
    name: parkDetails.name, 
    mapUrl: parkDetails.mapUrl, 
    hours: parkDetails.hours, 
    address: parkDetails.address, 
    city: parkDetails.city, 
    state: parkDetails.state, 
    zip: parkDetails.zip, 
    website: parkDetails.website, 
    parkImg: parkDetails.parkImg, 
  });

  useEffect(() => {
    const getSelectedPark = async () => {
      if (parksContent && parksContent.length > 0) {
        let selectedPark = parksContent.park(
          (park) => park.id === parseInt(parkId)
        );
        setParkDetails(selectedPark);
      }
    };
    getSelectedPark();
  }, [parkId, parksContent]);


  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e, id) => {
      e.preventDefault();
      Client.put(`/api/parks/${parkId}`, formValues).then(() => {
        navigate(`/parks/${parkId}`);
        getData();
      })
    };

  return (
    <div className="login-page">
      <div className="basket login">
        <div className="park-card-title"><br></br>
          <span className="state-title">ADD PARK</span>
        </div>
        <hr></hr><br></br>

        <div className="modal-body">
          <form className="park-form">
              <div className="form-input">
                <label htmlFor="park-name">
                  <span> PARK NAME </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="park-name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="park-address">
                  <span> ADDRESS </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="park-address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="state">
                  <span> STATE </span>
                </label>
                <br></br>
                <select
                  required
                  type="text"
                  id="state"
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                  className="form-input"
                >
                    <option value=""></option>
                    <option value="PA">PA</option>
                    <option value="NJ">NJ</option>
                </select>
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="city">
                  <span> CITY </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="city"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="zip">
                  <span> ZIP </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="zip"
                  name="zip"
                  value={formValues.zip}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="website">
                  <span> WEBSITE </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="website"
                  name="website"
                  value={formValues.website}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="park-pic">
                  <span> ADD IMAGE </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="park-pic"
                  name="parkImg"
                  value={formValues.parkImg}
                  onChange={handleChange}
                  className="form-input"
                />
              </div><br></br><br></br><br></br>
            <button 
                className="app-btn fog submit"
                onClick={handleSubmit}> submit 
            </button>

          </form>
        </div>
      </div>
      <div>
        <img className="forager-img" src={forager} alt="foragerImg" />
      </div>
    </div>
  );
};

export default EditPark;
