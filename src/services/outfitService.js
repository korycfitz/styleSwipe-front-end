import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/outfits`

// ALL REQUESTS IN THIS FILE WILL BEGIN WITH:
// http://localhost:3001/api/blogs

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
}