import React from "react"
import styles from "../styles/navbar.module.css" // Update import path to the correct CSS file
import CircleIcon from "@/assets/CircleIcon" // Update component name to use PascalCase
import { MdChevronRight } from "react-icons/md"
import InfoIcon from "@/assets/InfoIcon"
import SearchIcon from "@/assets/SearchIcon"
import Notification from "@/assets/Notification"
import MailInbox from "@/assets/MailInbox"
import Avatar from "./components/Avatar"

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.circleIconContainer}>
          <CircleIcon /> {/* Update component name to use PascalCase */}
        </div>
        <div className={styles.chevronIconContainer}>
          <MdChevronRight size={30} />
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.mailInboxIconContainer}>
          <MailInbox />
        </div>
        <div className={styles.notificationIconContainer}>
          <Notification />
        </div>
        <div className={styles.infoIconContainer}>
          <InfoIcon />
        </div>
        <div className={styles.searchIconContainer}>
          <SearchIcon />
        </div>
        <div className={styles.avatarContainer}>
          <Avatar imgUrl="https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
