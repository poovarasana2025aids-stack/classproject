import { useLocation } from "react-router-dom";


const location=useLocation();
const [userdata,setUserdata]=useState(" ");
function displaydata(){
    setUserdata(location.state);
    console.log(userdata);
}

function Dashboard(){
    return (
        <>
        <h1>Dashboard</h1>
        <button> onClick={displaydata}</button>
        </>
    );
}
export default Dashboard