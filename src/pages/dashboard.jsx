import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard(){
const location=useLocation();
const [userdata,setUserdata]=useState(" ");
// function displaydata(){
   // setUserdata(location.state);
   // console.log(userdata);
// }

useEffect(()=>{
    setUserdata(location.state);
    console.log(userdata);

},)

    return (
        <>
        <h1>Dashboard</h1>
        
        { /*  <button onClick={userdata}>Button</button> */}
        <button>{userdata.username}</button><br/>
        <button>{userdata.password}</button><br/>

        </>
    );
}
export default Dashboard