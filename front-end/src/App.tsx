import React, { useEffect, useState } from "react";
import axios from "axios";
import {options} from './components/apiconfig/api'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  const [data,setData]=useState([])
  useEffect(() => {
    const Hanleapi = async () => {
      try {     
        const res=await axios.request(options)
        setData(res.data.titles)
          
      } catch (err) {
        console.log(err);
      }
    };
    Hanleapi()
  }, []);
  return (
    <div>
      <Navbar/>
      <Header  />
    </div>
  )
}

export default App;
