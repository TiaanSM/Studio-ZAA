import styles from './Article.module.css';

const ArticleHero = () => {

  const articleTitle = 'title'
  const articleDesc = 'hgnd dfhjgdk dkgjd kdjgoe eiwms';
  const articleAuthor = 'tim burt'

  return (

    <section className={styles.section}>
        <div className={styles.textContainer}>
            <h2 className={styles.articleTitle}>{articleTitle}</h2>
            <p className={styles.articleDesc}>{articleDesc}</p>
            <p className={styles.articleAuthor}>Written bt<br/>{articleAuthor}</p>
        </div>
        <div className={styles.imageContainer}>
            <img src="" alt="" className={styles.articleImage} />
        </div>
    </section>

  )
}

export default ArticleHero