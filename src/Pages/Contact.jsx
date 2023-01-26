import Navbar from "../components/Navbar/Navbar";
import Image from "../components/Image";
import useScrollPercentage from "../components/useScrollPercentage"
import styles from '../components/Styles/Contact.module.css';
import PageChange from '../components/PageChange';
import { useEffect, useState } from 'react';

const Contact = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();
    // black logo

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
    
    <>
    <PageChange pageLoaded={playAnimation} />
    <Navbar scrollProgress={scrollPercentage} />
    <section className={styles.section}>
      
        <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.heading}>Project Enquiry</p>
                <h1 className={styles.title}>Want to enquire about building beyond?</h1>
                <p className={styles.formLink}>Let's Talk</p>
            </div>
            <div className={styles.linkContainer}>
                <h2 className={styles.heading}>Details</h2>
                <ul className={styles.list}>
                    <li className={styles.link}>Studio ZAA</li>
                    <li className={styles.link}>8 Green Lews</li>
                    <li className={styles.link}>Nowhere Street</li>
                    <li className={styles.link}>Cape Town</li>
                    <li className={styles.link}>0064</li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.link}>fakeEmail@studioZAA.com</li>
                    <li className={styles.link}>+27 123 456 7890</li>
                    <li className={styles.link}>Instagram, Twitter, Linkedin</li>
                </ul>
            </div>
        </div>
        <Image  
          width='40vw' 
          height="94vh" 
          src="https://ik.imagekit.io/x29dtqzji/tr:w-700,h-800/introImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239454" 
          imagealt="house-image" 
          displayTexts="none" 
        />
        </section>
    </>
  )
}

export default Contact