import Navbar from '../components/Navbar/Navbar';
import ProjectSidebar from '../components/Project/ProjectSidebar';
import ProjectImages from '../components/Project/ProjectImages';

import styles from '../components/Project/Project.module.css';
import logo from '../assets/img/Logo.png';

import useScrollPercentage from '../components/useScrollPercentage';


const ProjectThree = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <section className={styles.section} ref={scrollRef}>
      <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a>
      <Navbar scrollProgress={scrollPercentage} />
      <ProjectSidebar 
        title="Wineland Golf Field" 
        desc="Zil Pasyon's architecture is designed and built to settle discretely among the Islands unique granite boulders. The phrase, '“We will have succeeded if nothing can be seen from outside the Island” was a starting point for this project which began with a Concept Design in 2005, reaching final completion in 2017. The Six Senses resort in the Seychelles Islands on the private island of Félicité comprises 15 Resort Villas with their own infinity pool and ocean view, 3 Oceanside Bars, its own helicopter pad as well as a small number of luxury hillside Private Residences, each with their own acrylic base pool." 
        location="Port Elizabeth"
        completion="2021"
      />
      <ProjectImages />
      <ProjectImages />
    </section>
  )
}

export default ProjectThree