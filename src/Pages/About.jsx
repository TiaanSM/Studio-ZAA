import styles from '../components/About.module.css';
import Navbar from '../components/Navbar/Navbar';
import useScrollPercentage from '../components/useScrollPercentage';
import Image from '../components/Image';
import image from '../assets/img/introImage.webp';
import '../App.css';

const About = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (

    <section className={styles.about}>
        <Navbar scrollProgress={scrollPercentage} />
        <div className="scroll-container" ref={scrollRef} >
          <div className="content-container">

        <div className={styles.headingContainer}>
            <img src="" alt="" className={styles.headingImage} />
            <div className={styles.headTextContainer}>
                <h4 className={styles.headTitle}>Where innnovation fires inspiration and challenges the norm.</h4>
            </div>
        </div>

        <div className={styles.aboutUsContainer}>
            <div className={styles.aboutTextContainer}>
                <h6 className={styles.aboutIntro}>About Us</h6>
                <p className={styles.aboutDesc}>pasbfdu sufs fsusiie siuhfs ekspfs fjsi fdufbei Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur repellat enim et quo tempora unde!<br/><br/> Aliquid nisi quaerat incidunt facere numquam expedita architecto! Magni nam expedita optio cum, aliquid reiciendis eum non voluptates sint necessitatibus corporis esse, nesciunt at minus doloremque. Eius dignissimos explicabo nemo reiciendis ducimus suscipit asperiores!</p>
                <h6 className={styles.aboutTitle}>South Africa</h6>
            </div>
            <img src="" alt="" />
        </div>

        <div className={styles.processContainer}>
            <h6 className={styles.processIntro}>Our Process</h6>
            <div className={styles.processTextContainer}>
                <h6 className={styles.processTitle}>Crafting the exceptional.</h6>
                <p className={styles.processDesc}>Our award winning architecture is the result of meaningful collaborations with our clients. We revel in thinking, making, constructing. We never compromise.<br/><br/>Listening and translating to circumstance allows us to craft a highly detailed, low energy architecture, authentic and real. Weaving teaching and research with the latest technology into a rich studio culture that creates space for the exceptional.</p>
            </div>
        </div>
        <img src="" alt="" className={styles.processImage} />

        <div className={styles.leadershipContainer}>
            <h6 className={styles.leadTitle}>Leadership Team</h6>
            <p className={styles.leadDesc}>Studio ZAA is a team of over 15 problem solvers dedicated to making the physical world around us better for everyone.</p>
            <a href="/" className={styles.leadLink}>Let's Work Together</a>
        </div>

        <div className={styles.personelContainer}>
        <Image 
              width='100%' 
              height="530px" 
              src={image} 
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   
            <Image 
              width='100%' 
              height="530px" 
              src={image} 
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   
            <Image 
              width='100%' 
              height="530px" 
              src={image} 
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   
            <Image 
              width='100%' 
              height="530px" 
              src={image} 
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   
        </div>

        <div className={styles.awardsContainer}>
            <span>
                <h6>Over 13 International Awards Including:</h6>
            </span>
            <div>
              <ul>
                <li>NLA Awards 2034</li>
                <li>Frame Awards</li>
                <li>Ahead MEA 2030</li>
                <li>World Travel Awards 2055</li>
                <li>FX Design Awards 2025</li>
                <li>Archilovers 2038</li>
                <li>Offsite Awards 2042</li>
              </ul>
              <ul>
                <li>02</li>
                <li>02</li>
                <li>02</li>
                <li>01</li>
                <li>01</li>
                <li>04</li>
                <li>03</li>
              </ul>
            </div>
            <span>
                <h6>Awards</h6>
            </span>
        </div>

        <img src="" alt="" className={styles.finalImage} />

        <div className={styles.missionContainer}>
            <h6 className={styles.missionTitle}>Our Mission</h6>
            <p className={styles.missionDesc}>We're committed to making our world better through innovative and sustainable responses to every project.</p>
            <a href="/" className={styles.missionLink}>Let's Work Together</a>
        </div>

          </div>
        </div>
    </section>

  )
}

export default About