import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/Styles/NavJournal.module.css';
import PageChange from '../components/PageChange';
import ImageItem from "../components/ImageItem";

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

              <div className={styles.leftContainer}>
                
                <ImageItem 
                    imgSrc=" https://ik.imagekit.io/x29dtqzji/tr:w-700/articleImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237050"
                    imgAlt="house-image"
                    title="Architecture and Change"
                    link="Read More"
                    linkSrc="/Article/Architecture-And-Change"
                />

                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1300/pexels-expect-best-323776.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750704726"
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
                    linkSrc="/"
                />
        
              </div>

              <div className={styles.centerContainer}>

                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-700/projectImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236661"
                    imgAlt="house-image"
                    title="Modern Housing Trends"
                    link="Read More"
                    height="500px"
                    linkSrc="/Article/Modern-Housing-Trends"
                />
                    
                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1000/pexels-max-vakhtbovych-6316066.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750703423"
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
                    height="500px"
                    linkSrc="/"
                />

              </div>

              <div className={styles.rightContainer}>
                
                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-700/projectImage3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237239"
                    imgAlt="house-image"
                    title="Eco Friendly Designing"
                    link="Read More"
                    linkSrc="/Article/Eco-Friendly-Designing"
                />

                <ImageItem 
                    imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1000/lasse-moller-0TLId2pjnKk-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750699624"
                    imgAlt="house-image"
                    title="Placeholder"
                    link="Read More"
                    linkSrc="/"
                />

              </div>

            </div>

            <div className={styles.toTopContainer}>
            <p onClick={() => window.scrollTo(0,0)}>Back to top</p>
            </div>

        </div>
    </section>
  )
}

export default NavJournal