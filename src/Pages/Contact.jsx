import Navbar from "../components/Navbar/Navbar";
import Image from "../components/Image";
import useScrollPercentage from "../components/useScrollPercentage"
import styles from '../components/Contact.module.css';
import introImage from '../assets/img/introImage.webp';

const Contact = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();
    // black logo

  return (
    
    <>
    <Navbar scrollProgress={scrollPercentage} />
    <section className={styles.section}>
      
        <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.heading}>Project Enquiry</p>
                <h4 className={styles.title}>Want to enquire about building beyond?</h4>
                <p className={styles.formLink}>Let's Talk</p>
            </div>
            <div className={styles.linkContainer}>
                <p className={styles.heading}>Details</p>
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
          src={introImage} 
          imagealt="house-image" 
          displayTexts="none" 
        />
        </section>
    </>
  )
}

export default Contact