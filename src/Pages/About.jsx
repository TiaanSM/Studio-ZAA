import styles from '../components/Styles/About.module.css';
import Navbar from '../components/Navbar/Navbar';
import useScrollPercentage from '../components/useScrollPercentage';
import '../App.css';
import PageChange from '../components/PageChange';

const About = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (

    <section className={styles.about}>
      <PageChange />
        <Navbar scrollProgress={scrollPercentage} />
        <div className="scroll-container" ref={scrollRef} >
          <div className="content-container">

        <div className={styles.headingContainer}>
            <div className={styles.headTextContainer}>
                <h4 className={styles.headTitle}>Where innnovation fires inspiration and challenges the norm.</h4>
            </div>
        </div>

        <div className={styles.aboutUsContainer}>
            <div className={styles.aboutTextContainer}>
                <h6 className={styles.aboutIntro}>About Us</h6>
                <p className={styles.aboutDesc}>Studio ZAA is a South african based architecture and design practice with a global reputation for sustainable, bold and innovative residential, leisure and workplace environments. We are at the forefront of thinking on new trends in design, technology and architecture.<br/><br/>Our highly skilled team is renowned for the fast generation of concept ideas and hands-on project delivery. In tune with global fast changing markets, Studio ZAA combines commercial know-how with creative originality.</p>
                <h6 className={styles.aboutTitle}>South Africa</h6>
            </div>
        </div>

        <img src="https://ik.imagekit.io/x29dtqzji/tr:w-1000/pexels-vecislavas-popa-1643389.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750704863" alt="house-image" className={styles.processImage} />

        <div className={styles.processContainer}>
            <h6 className={styles.processIntro}>Our Process</h6>
            <div className={styles.processTextContainer}>
                <h6 className={styles.processTitle}>Crafting the exceptional.</h6>
                <p className={styles.processDesc}>Our award winning architecture is the result of meaningful collaborations with our clients. We revel in thinking, making, constructing. We never compromise.<br/><br/>Listening and translating to circumstance allows us to craft a highly detailed, low energy architecture, authentic and real. Weaving teaching and research with the latest technology into a rich studio culture that creates space for the exceptional.</p>
            </div>
        </div>

        <div className={styles.leadershipContainer}>
            <h6 className={styles.leadTitle}>Leadership Team</h6>
            <p className={styles.leadDesc}>Studio ZAA is a team of over 15 problem solvers dedicated to making the physical world around us better for everyone.</p>
            <a href="/" className={styles.leadLink}>Let's Work Together</a>
        </div>

        <div className={styles.awardsContainer}>

            <div className={styles.awardTextContainer}>
            <h6 className={styles.awardsIntro}>Over 13 International Awards Including:</h6>
              <ul className={styles.awardNamesContainer}>
                <li className={styles.awardName}>NLE Awards 2034<span className={styles.awardAmount}>02</span></li>
                <li className={styles.awardName}>Frame Awards<span className={styles.awardAmount}>02</span></li>
                <li className={styles.awardName}>Ahead MEA 2030<span className={styles.awardAmount}>02</span></li>
                <li className={styles.awardName}>World Travel Awards 2055<span className={styles.awardAmount}>01</span></li>
                <li className={styles.awardName}>FX Design Awards 2025<span className={styles.awardAmount}>03</span></li>
                <li className={styles.awardName}>Archilovers 2038<span className={styles.awardAmount}>04</span></li>
                <li className={styles.awardName}>Offsite Awards 2042<span className={styles.awardAmount}>03</span></li>
              </ul>
            </div>
                <h6 className={styles.awardsTitle}>Awards</h6>
        </div>

        <img src="https://ik.imagekit.io/x29dtqzji/tr:w-1000/lasse-moller-0TLId2pjnKk-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750699624" alt="house-image" className={styles.finalImage} />

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