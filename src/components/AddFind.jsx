//
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Client } from "../services/api";
import axios from "axios";

import forager from "../assets/forager.png";

const AddFind = () => {
  let id = 1;
  const [createFind, setCreateFind] = useState([]);
  const [formValues, setFormValues] = useState({
    commonName: "", //
    botanicalName: "", //
    benefits: "", //
    category: "", 
    poisonWarning: "", //
    dateFound: "", //
    notes: "", //
    picOne: "", //
    mapsLink: "", //
    abundanceRating: "", //
    locationDesc: "",  //
    landmarks: "",  //
    username: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const res = await Client.post(`api/finds/${id}`, formValues);
      console.log(res.data)
      setCreateFind(res.data)
      }

  return (
    <div className="login-page">
      <div className="basket login">
        <div className="park-card-title"><br></br>
          <span className="state-title">ADD FIND</span>
        </div>
        <hr></hr><br></br>

        <div className="modal-body">
          <form className="finds-form">
              <div className="form-input">
                <label htmlFor="common-name">
                  <span> COMMON NAME </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="common-name"
                  name="commonName"
                  value={formValues.commonName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="botanical-name">
                  <span> BOTANICAL NAME </span>
                </label>
                <br></br>
                <input
                  type="text"
                  id="botanicalName"
                  name="botanicalName"
                  value={formValues.botanicalName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>
              
              <div className="form-input">
                <label htmlFor="category">
                  <span> CATEGORY </span>
                </label>
                <br></br>
                <select
                  required
                  type="text"
                  id="category"
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  className="form-input"
                >
                    <option value=""></option>
                    <option value="mushrooms">mushrooms</option>
                    <option value="flowers">flowers</option>
                    <option value="fruits">fruits</option>
                    <option value="roots">roots</option>
                    <option value="herbs">herbs</option>
                    <option value="seeds">seeds</option>
                </select>
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="date-found">
                  <span> DATE FOUND </span>
                </label>
                <br></br>
                <input
                  required
                  type="date"
                  id="date-found"
                  name="dateFound"
                  value={formValues.dateFound}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="poison-warning">
                  <span> POISON WARNING </span>
                </label>
                <br></br>
                <input
                  type="text"
                  id="poisonWarning"
                  name="poisonWarning"
                  value={formValues.poisonWarning}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="benefits">
                  <span> BENEFITS </span>
                </label>
                <br></br>
                <input
                  type="text"
                  id="benefits"
                  name="benefits"
                  value={formValues.benefits}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="find-notes">
                  <span> NOTES </span>
                </label>
                <br></br>
                <textarea
                  type="text"
                  id="notes"
                  name="notes"
                  value={formValues.notes}
                  onChange={handleChange}
                  className="form-input"
                />
              </div><br></br>
              {/* WE NEED THE DROPDOWN TO GO HERE */}
              <div className="form-input">
                <label htmlFor="abundance-rating">
                  <span> ABUNDANCE RATING </span>
                </label>
                <br></br>
                <select
                  required
                  type="text"
                  id="abundane-rating"
                  name="abundanceRating"
                  value={formValues.abundanceRating}
                  onChange={handleChange}
                  className="form-input"
                >
                 <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="find-map">
                  <span> MAP LINK </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="find-map"
                  name="findMap"
                  value={formValues.mapsLink}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="location-description">
                  <span> LOCATION DESCRIPTION </span>
                </label>
                <br></br>
                <textarea
                  required
                  type="text"
                  id="location-description"
                  name="locationDescription"
                  value={formValues.locationDesc}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>

              <div className="form-input">
                <label htmlFor="landmarks">
                  <span> LANDMARKS </span>
                </label>
                <br></br>
                <input
                  type="text"
                  id="landmarks"
                  name="landmarks"
                  value={formValues.landmarks}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br>
              <div className="form-input">
                <label htmlFor="find-pic">
                  <span> ADD IMAGE </span>
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="find-pic"
                  name="findPic"
                  value={formValues.picOne}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <br></br><br></br><br></br>
            <button 
                className="app-btn fog submit" 
                onClick={handleSubmit}> submit
            </button>

          </form>
        </div>
      </div>
      <div>
        <img id="forager-img" src={forager} alt="foragerImg" />
      </div>
    </div>
  );
};

export default AddFind;
