import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/login'
import Tasks from '../src/pages/tasks'
import Projects from './pages/projects'
import Team from './pages/team'
import Clients from './pages/clients'
import Dashboard from './pages/dashboard'
import Calender from './pages/calender'
import Settings from './pages/settings'



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
      <Route path="/" element={<Login/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/calender" element={<Calender/>}/>
      <Route path="/settings" element={<Settings/>}/>
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
