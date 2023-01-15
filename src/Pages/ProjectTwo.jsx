import Navbar from '../components/Navbar/Navbar';
import ProjectSidebar from '../components/Project/ProjectSidebar';
import ProjectImages from '../components/Project/ProjectImages';

import styles from '../components/Project/Project.module.css';

import useScrollPercentage from '../components/useScrollPercentage';


const ProjectTwo = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const isMobile = window.innerWidth < 768;

  return (
    <section className={styles.section} ref={scrollRef}>
      <Navbar scrollProgress={scrollPercentage} />
      {isMobile ? <ProjectImages height="80vh"/> : null}
      <ProjectSidebar 
        title="Grover Complex" 
        desc="Zil Pasyon's architecture is designed and built to settle discretely among the Islands unique granite boulders. The phrase, '“We will have succeeded if nothing can be seen from outside the Island” was a starting point for this project which began with a Concept Design in 2005, reaching final completion in 2017. The Six Senses resort in the Seychelles Islands on the private island of Félicité comprises 15 Resort Villas with their own infinity pool and ocean view, 3 Oceanside Bars, its own helicopter pad as well as a small number of luxury hillside Private Residences, each with their own acrylic base pool." 
        location="Cape Town"
        completion="2020"
      />
      <ProjectImages height="500px" />
      <ProjectImages height="500px"/>
    </section>
  )
}

export default ProjectTwo