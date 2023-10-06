
import styles from './Landing.module.css'
import winLogo from '../../assets/images/logos/windows-95-logo.png'

const Landing = (props) => {

  return (
    <div className={styles.landingContainer}>
      <aside className={styles.sideLandingNav}>
        <div className={styles.hand}>👋</div>
        <div>Welcome!</div>
      </aside>
      <main className={styles.mainContent}>
        <h1>
          SEI Installfest
        </h1>
        <img className={styles.osLogo} src={winLogo} alt="Windows Logo" />
      </main>
    </div>
  )
}

export default Landing