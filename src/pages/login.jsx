
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
 // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [formdata,setFormdata]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate();

  function handleChange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  function handlesubmit(event) {
    event.preventDefault()
    console.log("Login Page:",formdata)
   // console.log("Email:", email)
   // console.log("Password:", password)
    alert("Login button clicked successfully!")
    navigate("/dashboard",{
      state:formdata
    })
  }

  return (
    <div>
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
