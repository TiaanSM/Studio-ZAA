import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/styles/NavJournal.module.css';
import ArticleImage from '../assets/img/articleImage2.webp';
import PageChange from '../components/PageChange';

const NavJournal = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <section className={styles.section} ref={scrollRef}>
        <PageChange />
        <Navbar scrollProgress={scrollPercentage} />
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.title}>Journal</h1>
            </div>
            <div className={styles.mainImageContainer}>

                <div className={styles.contentContainer}>
                
                  <div className={styles.imageContainer}>

                   <img src={ArticleImage} alt="" className={styles.sideImage} />
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Architecture and change</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>

                    <div className={styles.imageContainer}>
                   <img src={ArticleImage} alt="" className={styles.sideImage} />
                   
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Placeholder</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>
        
                </div>

                <div className={styles.contentContainer}>
                
                    <div className={styles.imageContainer}>

                   <img src={ArticleImage} alt="" className={styles.centerImage} />
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Modern Design And Architecture</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>

                    <div className={styles.imageContainer}>
                   <img src={ArticleImage} alt="" className={styles.centerImage} />
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Placeholder</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>
                   
                </div>

                <div className={styles.contentContainer}>
                
                   <div className={styles.imageContainer}>
                   <img src={ArticleImage} alt="" className={styles.sideImage} />
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Eco Friendly Designing</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>

                    <div className={styles.imageContainer}>
                   <img src={ArticleImage} alt="" className={styles.sideImage} />
                    <div className={styles.textContainer}>
                        <h4 className={styles.articleTitle}>Placeholder</h4>
                        <p className={styles.link}>Read More</p>
                    </div>
                    </div>

                </div>

            </div>
            <div className={styles.toTopContainer}>
                <p>Back to top</p>
            </div>
        </div>
    </section>
  )
}

export default NavJournal