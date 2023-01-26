import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/Styles/NavJournal.module.css';
import ArticleImage from '../assets/img/articleImage2.webp';
import PageChange from '../components/PageChange';
import { useEffect, useState } from 'react';
import ImageItem from "../components/ImageItem";

const NavJournal = () => {

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
                <h1 className={styles.title}>Journal</h1>
            </div>
            
            <div className={styles.mainImageContainer}>

              <div className={styles.contentContainer}>
                
                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-700/projectImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236661"
                    imgAlt="house-image"
                    title="Architecture and Change"
                    link="Read More"
                />

                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
                />
        
              </div>

              <div className={styles.contentContainer}>

                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-700/articleImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237050"
                    imgAlt="house-image"
                    title="Modern Design And Architecture"
                    link="Read More"
                    height="500px"
                />
                    
                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
                    height="500px"
                />

              </div>

              <div className={styles.contentContainer}>
                
                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-700/projectImage3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237239"
                    imgAlt="house-image"
                    title="Eco Friendly Designing"
                    link="Read More"
                />

                <ImageItem 
                    imgSrc={ArticleImage}
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
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

export default NavJournal