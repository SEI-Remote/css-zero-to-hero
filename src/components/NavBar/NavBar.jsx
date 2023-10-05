import gaLogo from '../../assets/images/logos/ga-red-black.png'
import gaCog from '../../assets/images/logos/red-cog.png'

import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navLogo} src={gaCog} alt="General Assembly Logo" />
      <div className={styles.linkContainer}>
        <Link to='/os-list'>OS List</Link>
        <Link to='/side-by-side'>Side View</Link>
        <Link to='/card-display'>Card View</Link>
      </div>
    </nav>
  )
}

export default NavBar