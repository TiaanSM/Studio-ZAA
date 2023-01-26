// header imports
import styles from '../components/Styles/Header.module.css';
import logo from '../assets/img/Logo.png';

// intro imports
import introStyles from '../components/Styles/Intro.module.css';
import introImage from '../assets/img/introImage.webp';

// projects imports
import projStyles from '../components/Styles/Projects.module.css';
import image1 from '../assets/img/projectImage4.webp';
import image2 from '../assets/img/projectImage5.webp';
import image3 from '../assets/img/projectImage6.webp';

// section imports
import secStyles from '../components/Styles/Section.module.css';
import sectionImage from '../assets/img/sectionImage.webp';

// articles imports
import artStyles from '../components/Styles/Articles.module.css';
import articleImage from '../assets/img/projectImage2.webp';
import articleImage2 from '../assets/img/articleImage2.webp';
import articleImage3 from '../assets/img/projectImage3.webp';

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
          <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a>
            <div className={styles.imageContainer}>
              <img 
                className={playAnimation === true ? styles.imageAnimated : styles.image} 
                src="https://ik.imagekit.io/x29dtqzji/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091"
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
          <img src={introImage} alt="house-image" className={introStyles.introImage} />
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
              src={image1} 
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
              src={image2} 
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
              src={image3} 
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

          <img src={sectionImage} alt="House-Image" className={secStyles.mainImage}/>

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
              src={articleImage2} 
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
            <Link to="Article/Modern-Design-And-Architecture" className={artStyles.linkStyles}>

              <Image width='100%' 
                height="222px" 
                src={articleImage} 
                imagealt="house-image" 

                displayTexts="inline-block" 
                title="Modern Design and Architecture"
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
                src={articleImage3} 
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