// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
// pages
import ChangePassword from './pages/ChangePassword/ChangePassword'
import EditOutfit from './pages/EditOutfit/EditOutfit'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import NewOutfit from './pages/NewOutfit/NewOutfit'
import Profiles from './pages/Profiles/Profiles'
import ShowOutfit from './pages/ShowOutfit/ShowOutfit'
import Signup from './pages/Signup/Signup'
import UserIndex from './pages/UserIndex/UserIndex'
import UserOutfits from './pages/UserOutfits/UserOutfits'
import UserPage from './pages/UserPage/UserPage'
import UserSwipes from './pages/UserSwipes/UserSwipes'

// components
import NavBar from './components/NavBar/NavBar'
import FooterBar from './components/FooterBar/FooterBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as outfitService from './services/outfitService'

// styles
import './App.css'
function App() {
  const [outfits, setOutfits] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [formData, setFormData] = useState({
    photo: ''
  })


  const navigate = useNavigate()

  useEffect(() => {
    // detchAllOutfits will serve as index
    const fetchAllOutfits = async () => {
      const data = await outfitService.index()
      setOutfits(data)
    }
    if (user) fetchAllOutfits()
  }, [user])
  
  const handleAddOutfit = async (outfitFormData) => {
    const newOutfit = await outfitService.create(outfitFormData)
    setOutfits([newOutfit, ...outfits])
    navigate(`/outfits`)
  }

  const handleUploadPhoto = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

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
      {<NavBar user={user} handleLogout={handleLogout} />}
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
          }/>
        <Route
          path='/outfits' element={<ShowOutfit outfits={outfits} user={user} />}/>
        <Route 
          path='/outfits/new' element={< NewOutfit handleAddOutfit={handleAddOutfit} handleUploadPhoto={handleUploadPhoto}/>}/>
        <Route 
          path='/profiles/:userId' element={< UserPage user={user} />}/>
        <Route 
          path='/profiles' element={< UserIndex />}/>

        <Route 
          path='/profiles/:userId/outfits' element={< UserOutfits />}/>
        <Route 
          path='/profiles/:userId/outfits/edit' element={< EditOutfit />}/>
      </Routes>
      <FooterBar user={user} />
    </>
  )
}

export default App
///tst