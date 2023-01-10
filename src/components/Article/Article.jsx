import useScrollPercentage from '../useScrollPercentage';
import styles from './Article.module.css';
import ArticleOne from './ArticleOne';

const Article = (props) => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <div className={styles.article}>
     <div className={styles.scrollContainer} ref={scrollRef}>
      <div className={styles.contentContainer}>
        <ArticleOne />
      </div>
     </div>
    </div>
  )
}

export default Article