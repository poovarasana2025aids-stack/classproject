
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
 // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
 // const [formdata,setFormdata]=useState({
 //   username:"",
  //  password:""
  // })
  const [logindata,setLogindata]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate();
const location=useLocation();

/*  function handleChange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
    */
    function handleChange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    })
  }

  function handlesubmit(event) {
    event.preventDefault()
    console.log("Login Page:",logindata)
    const registerdata=location.state;
    console.log("registration page",registerdata)
    console.log("login page",logindata)

    if(logindata.username===registerdata.name && logindata.password===registerdata.password)
      navigate("/dashboard",{
    state:logindata
  })
  
  else{
    console.log("invalid credentials")
  }
   // console.log("Email:", email)
   // console.log("Password:", password)
   // alert("Login button clicked successfully!")
    //navigate("/dashboard",{
    //  state:formdata
    //})
  }

  return (
    <div >
      <form onSubmit={handlesubmit}>
        <label>Username</label><br/>
        <input type="text" placeholder="Enter username"  name="username" onChange={handleChange}/><br/><br/>
        <label>Password</label><br/>
        <input type="password" placeholder="Enter password"  name="password" onChange={handleChange}/><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
