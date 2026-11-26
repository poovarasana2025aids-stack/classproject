import { useLocation } from "react-router-dom";
import { useState } from "react";

function Dashboard(){
const location=useLocation();
const [userdata,setUserdata]=useState(" ");
function displaydata(){
    setUserdata(location.state);
    console.log(userdata);
}


    return (
        <>
        <h1>Dashboard</h1>
        <button onClick={displaydata}>Button</button>
        </>
    );
}
export default Dashboard