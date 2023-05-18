// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Logout from './pages/Logout/Logout'
import OutfitList from './pages/OutfitList/OutfitList'
import OutfitDetails from './pages/OutfitDetails/OutfitDetails'
import NewOutfit from './pages/NewOutfit/NewOutfit'
import EditOutfit from './pages/EditOutfit/EditOutfit'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as outfitService from './services/outfitService'
import { getWeatherDataFromAPI } from './services/weatherService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [outfits, setOutfits] = useState([])
  const [coords, setCoords] = useState({})
  const [weather, setWeather] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      if (coords.lat) return
      setCoords({lat: position.coords.latitude, lng: position.coords.longitude})
    }, err => {
      console.log(err)
    })
    const fetchWeatherWithCoords = async () => {
      if (!coords.lat) return
      const weatherData = await getWeatherDataFromAPI(coords.lat, coords.lng)
      setWeather(weatherData)
    }
    fetchWeatherWithCoords()
  }, [coords])


  useEffect(() => {
    const fetchAllOutfits = async () => {
      const data = await outfitService.index()
      setOutfits(data)
    }
    if (user) fetchAllOutfits()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddOutfit = async (outfitFormData) => {
    const NewOutfit = await outfitService.create(outfitFormData)
    setOutfits([NewOutfit, ...outfits])
    navigate('/outfits')
  }

  const handleUpdateOutfit = async (outfitFormData) => {
    const updatedOutfit = await outfitService.update(outfitFormData)
    setOutfits(outfits.map(b => outfitFormData._id === b._id ? updatedOutfit : b))
    navigate('/outfits')
  }

  const handleDeleteOutfit = async (outfitId) => {
    const deletedOutfit = await outfitService.delete(outfitId)
    setOutfits(blogs.filter(b => b._id !== deletedOutfit._id))
    navigate('/outfits')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} weather={weather} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path='/outfits'
          element={
            <ProtectedRoute user={user}>
              <OutfitList outfits={outfits}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/outfits/:outfitId"
          element={
            <ProtectedRoute user={user}>
              <OutfitDetails user={user} handleDeleteOutfit={handleDeleteOutfit}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/outfits/new" 
          element={
            <ProtectedRoute user={user}>
              <NewOutfit handleAddOutfit={handleAddOutfit} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/outfits/:outfitId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditOutfit handleUpdateOutfit={handleUpdateOutfit} />
            </ProtectedRoute>
          } 
        />
        <Route path="/auth/logout" element={<Logout />} />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
      </Routes>
    </>
  )
}

export default App
