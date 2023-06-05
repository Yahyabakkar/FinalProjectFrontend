import React, { useEffect, useState } from "react";
import "./profile.css";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";
import FormPost from "../components/formPost/FormPost";

export default function Profile() {
const [data,setData]=useState(null)
  const headers = useAuthHeader();
  
  const getData = ()=> { axios
      .get(`${process.env.REACT_APP_URL}/profile/profilesById/`, {
        headers: { Authorization: headers() }
      })
      .then((res) => {
        setData(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      });
}  

useEffect(()=>{
  getData()
},[])

return (
    <div className="profile-page-container">
      <h2 className="">Profile</h2>
      <FormPost data={data||null}/>      
      
    </div>
  );
}
