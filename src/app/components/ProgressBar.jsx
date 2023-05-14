import { useState } from "react"
import styles from "../../styles/Progress.module.css"

export default function ProgressBar() {
  const [progress, setProgress] = useState(33) // Initial progress value (in percentage)
  const totalSquares = 10 // Total number of squares to display

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.name}>Mutual Action Plan</div>
        <div className={styles.percent}>{progress}%</div>
      </div>
      <div className={styles.squareContainer}>
        {Array.from({ length: totalSquares }, (_, index) => (
          <div
            className={`${styles.square} ${
              index < Math.ceil((progress / 100) * totalSquares)
                ? styles.active
                : ""
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  )
}
