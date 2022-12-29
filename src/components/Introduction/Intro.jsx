import styles from './Intro.module.css';

const Intro = () => {

  // 

  return (
    <section className={styles.intro}>

      <div className={styles.topContainer}>
        <h3 className={styles.title}>Introduction</h3>
        <img src="" alt="" className={styles.introImage} />
      </div>

      <div className={styles.bottomContainer}>
        <h1 className={styles.heading}>Established 2022</h1>
        <p className={styles.desc}>We are an architectural studio that believes in going further. 
          Being bold. Exploring the new. Where the surprising delights the 
          mind. Where people love to live, work and play. Let's start 
          building beyond.</p>
        <a href="" className={styles.link}>Learn More About Us</a>
      </div>

    </section>
  )
}

export default Intro