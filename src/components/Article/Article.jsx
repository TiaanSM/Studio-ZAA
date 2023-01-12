import useScrollPercentage from '../useScrollPercentage';
import styles from './Article.module.css';
import ArticleOne from './ArticleOne';

import { Routes, Route } from 'react-router-dom';

const Article = (props) => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <div className={styles.article}>
    <Routes>
      
    </Routes>
    </div>
  )
}

export default Article