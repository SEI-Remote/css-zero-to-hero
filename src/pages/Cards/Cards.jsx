import styles from './Cards.module.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

const Cards = (props) => {
  return ( 
    <div className={styles.cardContainer}>
      {props.articles.map(article => 
        <ArticleCard key={article._id} article={article} />
      )}
    </div>
  )
}

export default Cards