import { useState } from 'react'
import styles from './SideBySide.module.css'
import winLogo from '../../assets/images/logos/windows-11-logo.png'


const SideBySide = (props) => {
  const [selectedArticle, setSelectedArticle] = useState(props.articles[0])

  const handleSelectArticle = (idx) => {
    setSelectedArticle(props.articles[idx])
  }
  return (
    <div className={styles.sideBySideContainer}>
      <aside className={styles.sideNav}>
        {props.articles.map((article, idx) =>
          <div 
            key={article._id}
            className={`${styles.sideNavItem} ${article._id === selectedArticle._id ? styles.selected : '' }`}
            onClick={() => handleSelectArticle(idx)}
          >
            {article.title}
          </div>  
        )}
      
      </aside>
      <main className={styles.mainContent}>

      </main>
    </div>
  )
}

export default SideBySide