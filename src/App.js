import './App.css';
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Client from "./services/api";
import Main from "./components/AppPages/Main";
import Footer from "./components/AppPages/Footer";
import Header from "./components/AppPages/Header";


function App() {

  const [findsContent, setFindsContent] = useState ([]);
  const [updateFind, setUpdateFind] = useState ([]);
  const [findsFormData, setFindsFormData] = useState ({
    commonName: "",
    botanicalName: "",
    benefits: "",
    category: "",
    poisonWarning: "",
    dateFound: "",
    notes: "",
    picOne: "",
    picTwo: "",
    picThree: "",
    picFour: "",
    picFive: "",
    mapsLink: "",
    abundanceRating: "",
    locationDesc: "",
    landmarks: "",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  const getData = () => {
    Client.get(`/api/finds`).then((res) => {
      // console.log(res.data)
      setFindsContent(res.data);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);


  const handleDelete = (id) => {
    // console.log(id);
    Client.delete(`/api/finds/${id}`).then(() => {
      getData();
    });
  };

  const handleChange = (e) => {
    setFindsFormData ({ ...findsFormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    Client.put(`/api/finds/${id}`, findsFormData).then(() => {
      navigate("/basket");
      getData();
    });
  };

  return (
    <div id="app">
      <Header/>
      <Main 
        findsContent={ findsContent }
        updateFind={ updateFind }
        findsFormData={ findsFormData }
        handleSubmit={ handleSubmit }
        handleChange={ handleChange }
        />
      <Footer/>
    </div>
  );
}

export default App;



//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   
//  SWEEP    
