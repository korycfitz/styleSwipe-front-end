// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//services
import * as outfitService from './services/outfitService'

const OutfitDetails = (props) => {
  const { outfitId } = useParams()
  const [outfit, setOutfit] = useState(null)

  useEffect(() => {
    const fetchOutfit = async () => {
      const data = await outfitService.show(outfitId)
      SetOutfits(data)
    }
    fetchBlog()
  }, [blogId])

}

export default fetchOutfit