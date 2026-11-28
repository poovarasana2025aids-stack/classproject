import { Link, Outlet } from "react-router-dom";

function Admin() {
    return (  
        <>
        <nav>
            <Link to={"/admin/admindashboard"}> Dashboard</Link><br/>
            <Link to={"/admin/userdetails"}>UserDetails</Link><br/>
            
            <Link to={"/admin/adminsettings"}>Settings</Link>
            
            
        </nav>
        <Outlet/>
        </>

    );
}

export default Admin;