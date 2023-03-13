import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/Styles/NavJournal.module.css';
import PageChange from '../components/PageChange';
import ImageItem from "../components/ImageItem";


const NavProjects = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <section className={styles.section} ref={scrollRef}>

        <PageChange />
        <Navbar scrollProgress={scrollPercentage} />

        <div className={styles.mainContainer}>

            <div className={styles.headingContainer}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            
            <div className={styles.mainImageContainer}>

              <div className={styles.leftContainer}>
                
                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239477"
                  imgAlt="house-image"
                  title="Malbury Ocean View"
                  link="View Project"
                  linkSrc="Malbury-Ocean-View"
                />

                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1000/pexels-vecislavas-popa-1643389.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750704863"
                  imgAlt="house-image"
                  title="Placeholder"
                  link="View Project"
                  linkSrc="/"
                />
        
              </div>

              <div className={styles.centerContainer}>

                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239418" 
                  imgAlt="house-image"
                  title="Grover Complex"
                  link="View Project"
                  height="500px"
                  linkSrc="Grover-Complex"
                />
                    
                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1300/r-architecture-mHJiuZx2b8M-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750701286"
                  imgAlt="house-image"
                  title="Placeholder"
                  link="View Project"
                  height="500px"
                  linkSrc="/"
                />

              </div>

              <div className={styles.rightContainer}>
                
                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738298379"
                  imgAlt="house-image"
                  title="Wineland Golf Field"
                  link="View Project"
                  linkSrc="Wineland-Golf-Field"
                />

                <ImageItem 
                  imgSrc="https://ik.imagekit.io/x29dtqzji/tr:w-1200/pexels-max-vakhtbovych-8134821.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750704444" 
                  imgAlt="house-image"
                  title="Placeholder"
                  link="View Project"
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

export default NavProjects