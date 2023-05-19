import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'
import fake from '../../assets/no_userprofile_picture.png'

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
    return (
      <main className={styles.container}>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>All Profiles</h1>
      <div className={styles.profileList}>
        {profiles.map((profile) => (
          <div className={styles.profileBox} key={profile._id}>
            <div className={styles.card}>
              <div className={styles.pictureSpace}>
                <img
                  src={profile.photo || fake}
                  alt={profile.name}
                  className={styles.profileImage}
                />
              </div>
              <p className={styles.profileName}>{profile.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Profiles
