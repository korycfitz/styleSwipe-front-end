import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'
import fake from "../../assets/no_userprofile_picture.png"
const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <h1>Hello!! This is a list of all the profiles.</h1>
      <div className={styles.profileList}>
        {profiles.map((profile) => (
          <div
            className={styles.profileBox}
            key={profile._id}
            style={{ backgroundColor: profile.photo ? '' : '#f2f2f2' }}
          >
            <img
              src={profile.photo || fake }
              alt={profile.name}
              className={styles.profileImage}
            />
            <p className={styles.profileName}>{profile.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Profiles

