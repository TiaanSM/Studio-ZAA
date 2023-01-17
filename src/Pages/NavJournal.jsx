import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import Image from "../components/Image";
import styles from '../components/NavJournal.module.css';
import ArticleImage from '../assets/img/articleImage2.webp';

const NavJournal = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <section className={styles.section} ref={scrollRef}>
        <Navbar scrollProgress={scrollPercentage} />
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.title}>Journal</h1>
            </div>
            <div className={styles.mainImageContainer}>

                <div className={styles.imageContainer}>
                <Image 
                    width='30vw' 
                    height="400px"
                    src={ArticleImage}  
                    padding="0 0 2rem 0"
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                  <Image 
                    width='30vw' 
                    height="400px"
                    src={ArticleImage} 
                    padding="0 0 2rem 0" 
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                </div>

                <div className={styles.imageContainer}>
                <Image 
                    width='30vw' 
                    height="500px"
                    src={ArticleImage}  
                    padding="0 0 2rem 0"
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                   <Image 
                    width='30vw' 
                    height="500px"
                    src={ArticleImage}
                    padding="0 0 2rem 0"  
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                </div>

                <div className={styles.imageContainer}>
                <Image 
                    width='30vw' 
                    height="400px"
                    src={ArticleImage}
                    padding="0 0 2rem 0"  
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                   <Image 
                    width='30vw' 
                    height="400px"
                    src={ArticleImage} 
                    padding="0 0 2rem 0" 
                  
                    displayTexts="inline-block" 
                    title="Architecture and Change"
                    link="Read More" 
                    color="white"
                   />
                </div>

            </div>
        </div>
    </section>
  )
}

export default NavJournal