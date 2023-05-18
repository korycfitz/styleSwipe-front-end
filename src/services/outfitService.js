// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/outfits`



async function create(outfitFormData){
  try{
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(outfitFormData)
    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    console.log(err)
  }
}
async function show(outfitId){
  try{
    const res = await fetch(`${BASE_URL}/${outfitId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}

async function update(outfitFormData){
  try{
    const res = await fetch(`${BASE_URL}/${outfitFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(outfitFormData)
    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}

async function createComment(outfitId, commentFormData){
  try{
    const res = await fetch(`${BASE_URL}/${outfitId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}

async function deleteOutfit(outfitId){
  try{
    const res = await fetch(`${BASE_URL}/${outfitId}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}

async function deleteComment(outfitId, commentId){
  try{
    const res = await fetch(`${BASE_URL}/${outfitId}/${commentId}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` }

    })
    return res.json()
  }catch (err) {
    console.log(err)
  }
}


export {
  create,
  index,
  show,
  update,
  createComment,
  deleteOutfit as delete,
  deleteComment,
}

// services
// import * as tokenService from './tokenService'

// const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/blogs`

// // ALL REQUESTS IN THIS FILE WILL BEGIN WITH:
// // http://localhost:3001/api/blogs

// async function index() {
//   try {
//     const res = await fetch(BASE_URL, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function show(blogId) {
//   try {
//     const res = await fetch(`${BASE_URL}/${blogId}`, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function create(blogFormData) {
//   try {
//     // BASE_URL IS POST http://localhost:3001/api/blogs
//     const res = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: { 
//         'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(blogFormData)
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function update(blogFormData) {
//   try {
//     const res = await fetch(`${BASE_URL}/${blogFormData._id}`, {
//       method: 'PUT',
//       headers: { 
//         'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(blogFormData)
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function deleteBlog(blogId) {
//   try {
//     const res = await fetch(`${BASE_URL}/${blogId}`, {
//       method: 'DELETE',
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function createComment(blogId, commentFormData) {
//   try {
//     // POST http://localhost:3001/api/blogs/:blogId/comments
//     const res = await fetch(`${BASE_URL}/${blogId}/comments`, {
//       method: 'POST',
//       headers: { 
//         'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(commentFormData)
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// export { 
//   index, 
//   show, 
//   create, 
//   update,
//   deleteBlog as delete,
//   createComment
// }