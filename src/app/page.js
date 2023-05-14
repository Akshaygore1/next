import styles from "../styles/page.module.css"
import Navbar from "./Navbar"
import Hero from "./Hero"
import MainContent from "./MainContent"

export default function Home() {
  return (
    <>
      <Navbar />
      <hr className={styles.divider} />
      <Hero />
      <MainContent />
    </>
  )
}
