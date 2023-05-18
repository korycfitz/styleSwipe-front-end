// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/outfits`

// ALL REQUESTS IN THIS FILE WILL BEGIN WITH:
// http://localhost:3001/api/outfits

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

async function show(outfitId) {
  try {
    const res = await fetch(`${BASE_URL}/${outfitId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(outfitFormData) {
  try {
    // BASE_URL IS POST http://localhost:3001/api/blogs
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(outfitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(outfitFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${outfitFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(outfitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteBlog(outfitId) {
  try {
    const res = await fetch(`${BASE_URL}/${outfitId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(outfitId, commentFormData) {
  try {
    // POST http://localhost:3001/api/blogs/:outfitId/comments
    const res = await fetch(`${BASE_URL}/${outfitId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index, 
  show, 
  create, 
  update,
  deleteBlog as delete,
  createComment
}