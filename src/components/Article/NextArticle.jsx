import styles from './Article.module.css';

const nextArticle = (props) => {


    const textContainerStyle = {
        
    }

    const linkStyle = {
        
    }

    const titleStyle = {
        
    }

  return (
    <section className={styles.nextSection}>
        <div className={styles.nextImageContainer}>
            <img src="" alt="" className={styles.nextImage} />
        </div>
        <div className={styles.nextTextContainer}>
            <p className={styles.nextLink}>Next Article</p>
            <h4 className={styles.nextTitle}>{props.nextArticle}</h4>
        </div>
    </section>
  )
}

export default nextArticle