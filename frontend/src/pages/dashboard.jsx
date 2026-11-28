import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../components/api.js";

function Dashboard(){
const location=useLocation();
const [userdata,setUserdata]=useState("");
// function displaydata(){
   // setUserdata(location.state);
   // console.log(userdata);
// }

useEffect(()=>{
    setUserdata(location.state);
   // console.log(userdata);

},[]);

const checkendpoint=async()=>{
    const response=await API.get("/api/get");
    console.log(response.data)
}

    return (
        <>
        <h1>Dashboard Page</h1>
        
        { /*  <button onClick={userdata}>Button</button> 
        <button>{userdata.username}</button><br/>
        <button>{userdata.password}</button><br/>*/}
        <button onClick={checkendpoint}>Click API</button>

        </>
    );
}
export default Dashboard