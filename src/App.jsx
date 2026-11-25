import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Tasks from './pages/tasks'
import Login from './pages/login'
import Projects from './pages/projects'


function App() {
  {/*

  
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log(email,password)
  }

  function print(){
  console.log("Printing statements")
  console.log(email,password)
}
*/}

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    {/*
    <div className="text-blue-500">HI</div>
    <div className="email">Email</div>
    <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/><br/>
    <div className="password">Password</div>
    <input type="password" required placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
    <button type="submit" onClick={()=>console.log(email,password)}>Submit</button><br/><br/>
    <button type="submit" onClick={()=>print()}>Submit</button>
     

    <form action="" onSubmit={handlesubmit}>
       <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/><br/>
    
    <input type="password" required placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
    
    <button type="submit">Submit</button>
    </form>

    {
      /*  comments
       hi
       hello
      */
    }

  </>
  )
}

export default App
