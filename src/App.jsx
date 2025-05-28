import React, { useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Player'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        console.log("Logged In", user);
        navigate("/");
      } else {
        console.log("Logged out");
        navigate("/login");
      }
    }
    );
  },[])
  
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />

        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App
