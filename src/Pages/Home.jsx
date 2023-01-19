// header imports
import styles from '../components/Styles/Header.module.css';
import headerImage from '../assets/img/headerImg.webp';
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

import useScrollPercentage from '../components/useScrollPercentage';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import '../App.css';


const Home = () => {

  // intro image zoom out animation when inview.

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .60,
    triggerOnce: true
  });


  return (
    <>
      <div className="animated-box1"></div>
      <div className="animated-box2"></div>
      <div className="animated-box3"></div>
      <Navbar scrollProgress={scrollPercentage} />
      
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">
        

        <header className={styles.header}>
          <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={headerImage} alt="house-image"/>
            </div>
              <h1 className={styles.title}>Building Beyond</h1>
              <p className={styles.desc}>
                We are a South African architecture and design studio with a 
                global reputation for creating innovative spaces.
              </p>
        </header>


        
        <section className={introStyles.intro}>
        
        <div className={introStyles.topContainer}>
          <h3 className={introStyles.title}>Introduction</h3>
          <img src={introImage} alt="" className={introStyles.introImage} />
        </div>

        <div className={introStyles.bottomContainer}>
          <h1 className={introStyles.heading}>Established 2022</h1>
          <p className={introStyles.desc}>We are an architectural studio that believes in going further. 
            Being bold. Exploring the new. Where the surprising delights the 
            mind. Where people love to live, work and play. Let's start 
            building beyond.</p>
          <a href="" className={introStyles.link}>Learn More About Us</a>
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
            <h3 className={secStyles.title}>What We Do</h3>
        
            <h3 className={secStyles.heading}>
              Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </h3>

            <p className={secStyles.descLink}>Focusing on <a href="" className={secStyles.a}>Commercial</a> & <a href="" className={styles.a}>Residential</a> Projects</p>

            <a href="" className={secStyles.projectLink}>View All Projects</a>
          </div>

          <img src={sectionImage} alt="House-Image" className={secStyles.mainImage}/>

          <div className={secStyles.journalContainer} ref={ref}>

            <h3 className={secStyles.journalHeading}>Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </h3>
            <a href="" className={secStyles.articleLink}>View All Articles</a>
            <h4 className={inView ? secStyles.animatedTitle : secStyles.journalTitle}>Journal</h4>
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