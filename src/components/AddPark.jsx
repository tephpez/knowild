//
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Client } from "../services/api";
import axios from "axios";

import forager from "../assets/forager.png";

const AddPark = () => {
  let id = 1;
  const [createPark, setCreatePark] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "", 
    mapUrl: "", 
    hours: "", 
    address: "", 
    city: "", 
    state: "", 
    zip: "", 
    website: "", 
    parkImg: "", 
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const response = await Client.post(`api/parks/${id}`, formValues);
      console.log(response.data)
      setCreatePark(response.data)
      }

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
                  name="parkName"
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
                  name="parkAddress"
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
                  name="parkPic"
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
        <img id="forager-img" src={forager} alt="foragerImg" />
      </div>
    </div>
  );
};

export default AddPark;
