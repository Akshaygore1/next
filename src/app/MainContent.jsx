"use client"
import React, { useState } from "react"
import styles from "../styles/menu.module.css"
import { BsArrowDown } from "react-icons/bs"
import { BsFiletypePdf } from "react-icons/bs"
import { VscEyeClosed } from "react-icons/vsc"
import { RiDeleteBin6Line } from "react-icons/ri"
import { HiDownload } from "react-icons/hi"
import { HiMagnifyingGlassMinus } from "react-icons/hi2"
import { HiMagnifyingGlassPlus } from "react-icons/hi2"
import { BiLinkExternal } from "react-icons/bi"
import ProgressBar from "./components/ProgressBar"

const MainContent = () => {
  const [activeButton, setActiveButton] = useState("Basic Info")
  const [page, setpage] = useState(2)
  const [totalPage, settotalPage] = useState(14)

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.container1}>
        <div className={styles.child1}>Company Profile</div>
        <div>
          <ProgressBar />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.menubutton} ${
              activeButton === "Basic Info" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Basic Info")}
          >
            Basic Info
          </button>
          <button
            className={`${styles.menubutton} ${
              activeButton === "Files" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Files")}
          >
            Files
          </button>
          <button
            className={`${styles.menubutton} ${
              activeButton === "Mutual Action Plan" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Mutual Action Plan")}
          >
            Mutual Action Plan
          </button>
          <button
            className={`${styles.menubutton} ${
              activeButton === "Contact" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("Contact")}
          >
            Contact
          </button>
        </div>
        <button className={styles.menubutton}>Internal Actions</button>
      </div>
      <div className={styles.container3}>
        <div className={styles.container4}>
          <div className={styles.sideMenu}>
            <h2>Overview</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Welcome</li>
              <li>Product Capabilities</li>
              <li>Customer Success Stories</li>
              <li>File Sharing</li>
              <li>Our Deck</li>
            </ul>
          </div>
          <div className={styles.container5}>
            <div className={styles.container6}>
              <h3>Company Profile</h3>
              <div className={styles.iconsWrap}>
                <div className={styles.icons}>
                  <BsArrowDown />
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                  <VscEyeClosed />
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className={styles.imageWrap}>
              <div className={styles.glassWrapper}>
                <div className={styles.icons}>
                  <BsFiletypePdf />
                </div>
                <div className={styles.icons}>
                  {page}/{totalPage}
                </div>
                <div className={styles.icons}>
                  <HiDownload color="#657372" />
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                  <HiMagnifyingGlassMinus color="#657372" />
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                  <HiMagnifyingGlassPlus color="#657372" />
                </div>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                  <BiLinkExternal color="#657372" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
