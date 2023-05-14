import React from "react"
import styles from "../styles/hero.module.css"
import HeroImage from "../assets/heroImg.png" // Update the import path and image file name/extension
import Image from "next/image"

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>WeWork + Salesforce</h1>
          <button className={styles.button}>Publish/Share</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.heroImg}></div>
          <div className={styles.profile}></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
