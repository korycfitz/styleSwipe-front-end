// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import OutfitCard from './components/OutfitCard/OutfitCard'

// services
import * as authService from './services/authService'
import * as outfitService from './services/outfitService'

// styles
import './App.css'
import OutfitList from './components/OutfitList/OutfitList'

function App() {
  const [outfits, setOutfits] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllOutfits = async () => {
      const data = await outfitService.index()
      console.log(outfits)
      setOutfits(data)
    }
    if (user) fetchAllOutfits()
  }, [user])
  


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }
  return (
    <>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout}/>} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} outfits={outfits}/>}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} outfits={outfits}/>}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/outfits' element={<OutfitList outfits={outfits} user={user}/>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
