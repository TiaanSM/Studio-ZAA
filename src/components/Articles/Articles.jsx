import styles from './Articles.module.css';
import articleImage from '../../assets/img/projectImage2.webp';
import articleImage2 from '../../assets/img/articleImage2.webp';
import articleImage3 from '../../assets/img/projectImage3.webp';

const Articles = () => {
  return (
    <div className={styles.articles}>

      <div className={styles.container}>
        <img src={articleImage2} alt="" className={styles.image1} />
        <p className={styles.articleTitle}>Achitecture And Change</p>
        <a href="" className={styles.articleLink}>Read Article</a>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
          <img src={articleImage} alt="" className={styles.image2} />
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

        <div className={styles.articleContainer}>
          <img src={articleImage3} alt="" className={styles.image2} />
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

      </div>
    </div>
  )
}

export default Articles