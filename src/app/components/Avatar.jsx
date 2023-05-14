import React from "react"
import styles from "../../styles/Avatar.module.css"

const Avatar = ({ imgUrl }) => {
  return (
    <div className={styles.avatar}>
      <img src={imgUrl} alt="Avatar" />
    </div>
  )
}

export default Avatar
