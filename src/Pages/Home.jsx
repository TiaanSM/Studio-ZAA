// header imports
import styles from '../components/Styles/Header.module.css';
import logo from '../assets/img/Logo.png';

// intro imports
import introStyles from '../components/Styles/Intro.module.css';

// projects imports
import projStyles from '../components/Styles/Projects.module.css';

// section imports
import secStyles from '../components/Styles/Section.module.css';

// articles imports
import artStyles from '../components/Styles/Articles.module.css';

// imports
import Navbar from '../components/Navbar/Navbar';
import Image from '../components/Image';
import PageChange from '../components/PageChange';

import useScrollPercentage from '../components/useScrollPercentage';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../App.css';


const Home = () => {

  // intro image zoom out animation when inview.
  // import all images in one line.
  // semantic elements.

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .60,
    triggerOnce: true
  });

  const [playAnimation, setPlayAnimation] = useState(false);

    
    useEffect(() => {
      window.scrollTo(0,0);
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
      
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">
        

        <header className={styles.header}>
          <a href="/home"><img src={logo} alt="logo" className={styles.logo} /></a>
            <div className={styles.imageContainer}>
              <img 
                className={playAnimation === true ? styles.imageAnimated : styles.image} 
                src="https://ik.imagekit.io/x29dtqzji/tr:w-1600,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091"
                srcset='https://ik.imagekit.io/x29dtqzji/tr:w-450,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 400w,
                https://ik.imagekit.io/x29dtqzji/tr:w-800,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 800w,
                https://ik.imagekit.io/x29dtqzji/tr:w-1600,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 1400w'
                sizes='(max-width: 400px) 400px, (max-width: 800px) 800px, 1400px'
                alt="header-house-image"
              />
            </div>
              <h1 className={playAnimation === true ? styles.titleAnimated : styles.title}>Building Beyond</h1>
              <p className={styles.desc}>
                We are a South African architecture and design studio with a 
                global reputation for creating innovative spaces.
              </p>
        </header>


        
        <section className={introStyles.intro}>
        
        <div className={introStyles.topContainer}>
          <h2 className={introStyles.title}>Introduction</h2>
          <img src="https://ik.imagekit.io/x29dtqzji/tr:w-700,h-800/introImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239454" 
          alt="house-image" 
          className={introStyles.introImage} 
          />
        </div>

        <div className={introStyles.bottomContainer}>
          <h3 className={introStyles.heading}>Established 2022</h3>
          <p className={introStyles.desc}>We are an architectural studio that believes in going further. 
            Being bold. Exploring the new. Where the surprising delights the 
            mind. Where people love to live, work and play. Let's start 
            building beyond.</p>
          <Link to="/About" className={introStyles.link}>
            <p>Learn More About Us</p>
          </Link>
        </div>

        </section>


        <main className={projStyles.main}>

          <div className={projStyles.container}>
          <Link className={projStyles.linkStyle} to="Project/Malbury-Ocean-View">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239477"
              imagealt="house-image" 
            
              title="Malbury Ocean View"
              link="View Project"
              color="black"
              displayTexts="inline-block" 
            />

          </Link>
          </div>
        
          <div className={projStyles.container}>
          <Link className={projStyles.linkStyle} to="Project/Grover-Complex">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239418" 
              imagealt="house-image" 
             
              title="Grover Complex"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />

          </Link>
          </div>

          <div className={projStyles.container}>
          <Link className={projStyles.linkStyle} to="Project/Wineland-Golf-Field">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738298379"
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   

          </Link>
          </div>

        </main>



        <div className={secStyles.section}>
          <div className={secStyles.container}>
            <h2 className={secStyles.title}>What We Do</h2>
        
            <p className={secStyles.heading}>
              Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </p>

            <span className={secStyles.descLink}>Focusing on <span className={secStyles.a}>Commercial</span> & <span className={secStyles.a}>Residential</span> Projects</span>
            <Link to="/Project">
            <p className={secStyles.projectLink}>View All Projects</p>
            </Link>
          </div>

          <img src="https://ik.imagekit.io/x29dtqzji/tr:w-750/sectionImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236834" 
          alt="House-Image" className={secStyles.mainImage}/>

          <div className={secStyles.journalContainer} ref={ref}>

            <p className={secStyles.journalHeading}>Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </p>
            <Link to="/Journal" className={secStyles.journalLink}>
              <p className={secStyles.articleLink}>View All Articles</p>
            </Link>
            <h3 className={inView ? secStyles.animatedTitle : secStyles.journalTitle}>Journal</h3>
          </div>
        </div>


        <div className={artStyles.articles}>

          <div className={artStyles.container}>
          <Link to="Article/Architecture-and-change" className={artStyles.linkStyles}>

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-700/articleImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237050" 
              imagealt="house-image" 
        
              displayTexts="inline-block" 
              title="Architecture and Change"
              link="View Article" 
              color="white"
            />

          </Link>
          </div>

          <div className={artStyles.container}>
            <div className={artStyles.articleContainer}>
            <Link to="Article/Modern-Housing-Trends" className={artStyles.linkStyles}>

              <Image width='100%' 
                height="222px" 
                src="https://ik.imagekit.io/x29dtqzji/tr:w-600/projectImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236661"
                imagealt="house-image" 

                displayTexts="inline-block" 
                title="Modern Housing Trends"
                link="View Article"
                color="white"
              />

            </Link>
            </div>

            <div className={artStyles.articleContainer}>
            <Link to="Article/Eco-Friendly-Designing" className={artStyles.linkStyles}>

              <Image 
                width='100%' 
                height="222px" 
                src="https://ik.imagekit.io/x29dtqzji/tr:w-600/projectImage3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237239"
                imagealt="house-image"
                displayTexts="inline-block" 
                title="Eco Friendly Designing"
                link="View Article"
                color="white"
              />
          
            </Link>
            </div>

          </div>
        </div>
        

        </div>
      </div>
    </>
  )
}

export default Home