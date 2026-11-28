
import { useState } from 'react'

function Projects() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleproject(event) {
    event.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
    
  }

  return (
    <div>
      <form onSubmit={handleproject}>
        <label>Email</label><br/>
        <input type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <label>Password</label><br/>
        <input type="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Projects
