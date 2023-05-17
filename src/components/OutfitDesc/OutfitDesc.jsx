// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as outfitService from '../../services/outfitService'

// css
import styles from './OutfitDesc.module.css'


const OutfitDesc = (props) => {
  const { outfitId } = useParams()
  const [outfit, setOutfit] = useState(null)

  useEffect(() => {
    const fetchOutfit = async () => {
      const data = await outfitService.show(outfitId)
      console.log('OUTFITDESC: ', props.user)
      setOutfit(data)
    }
    fetchOutfit()
  }, [outfitId])

  return (
    <div className={styles.container}>

    </div>
  )
}

export default OutfitDesc;