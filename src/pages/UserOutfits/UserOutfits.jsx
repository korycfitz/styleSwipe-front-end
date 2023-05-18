//css
import styles from './UserOutfits.module.css'

//components
import OutfitList from "../OutfitList/OutfitList"

const UserOutfits = () => {
  return (
    <div className={styles.container}>
      <OutfitList />
    </div>
  )
}

export default UserOutfits