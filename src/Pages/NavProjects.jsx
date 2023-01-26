import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/Styles/NavJournal.module.css';
import ArticleImage from '../assets/img/articleImage2.webp';
import PageChange from '../components/PageChange';
import { useEffect, useState } from 'react';
import ImageItem from "../components/ImageItem";

const NavProjects = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

    const [playAnimation, setPlayAnimation] = useState(false);

    
    useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
    }, []);

  return (
    <section className={styles.section} ref={scrollRef}>

        <PageChange pageLoaded={playAnimation} />
        <Navbar scrollProgress={scrollPercentage} />

        <div className={styles.mainContainer}>

            <div className={styles.headingContainer}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            
            <div className={styles.mainImageContainer}>

              <div className={styles.contentContainer}>
                
                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Malbury Ocean View"
                    link="View Project"
                />

                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="View Project"
                />
        
              </div>

              <div className={styles.contentContainer}>

                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Grover Complex"
                    link="View Project"
                    height="500px"
                />
                    
                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="View Project"
                    height="500px"
                />

              </div>

              <div className={styles.contentContainer}>
                
                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Wineland Golf Field"
                    link="View Project"
                />

                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="View Project"
                />

              </div>

            </div>

            <div className={styles.toTopContainer}>
                <p>Back to top</p>
            </div>

        </div>
    </section>
  )
}

export default NavProjects