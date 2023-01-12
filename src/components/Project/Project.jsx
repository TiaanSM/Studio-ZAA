import Navbar from '../Navbar/Navbar';
import ProjectSidebar from './ProjectSidebar'

import styles from './Project.module.css';

import useScrollPercentage from '../useScrollPercentage';

const Project = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <section className={styles.section} ref={scrollRef}>

      <Navbar scrollProgress={scrollPercentage} />
      <ProjectSidebar 
        title="Malbury Ocean View" 
        desc="Zil Pasyon's architecture is designed and built to settle discretely among the Islands unique granite boulders. The phrase, '“We will have succeeded if nothing can be seen from outside the Island” was a starting point for this project which began with a Concept Design in 2005, reaching final completion in 2017. The Six Senses resort in the Seychelles Islands on the private island of Félicité comprises 15 Resort Villas with their own infinity pool and ocean view, 3 Oceanside Bars, its own helicopter pad as well as a small number of luxury hillside Private Residences, each with their own acrylic base pool." 
        location="Cape Town"
        completion="2019"
      />
      <div className={styles.dummy1} >
        
      </div>
      <div className={styles.dummy2}>
        
      </div>
      <div className={styles.dummy3}>
        
      </div>
    </section>
  )
}

export default Project