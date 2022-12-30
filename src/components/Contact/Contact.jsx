import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>

      <div className={styles.container}>
        <img src="" alt="" className={styles.image1} />
        <p className={styles.articleTitle}>Achitecture And Change</p>
        <a href="" className={styles.articleLink}>Read Article</a>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
          <img src="" alt="" className={styles.image2} />
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

        <div className={styles.articleContainer}>
          <img src="" alt="" className={styles.image2} />
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

      </div>
    </div>
  )
}

export default Contact