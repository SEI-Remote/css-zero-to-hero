import styles from './ArticleCard.module.css'

const ArticleCard = (props) => {
  return ( 
    <div className={styles.articleCard}>
      <img className={styles.cardImg} src={props.article.image} alt="Fun Pet Photo" />
      <h2>{props.article.title}</h2>
      <p>{props.article.headline}</p>
    </div>
  )
}

export default ArticleCard