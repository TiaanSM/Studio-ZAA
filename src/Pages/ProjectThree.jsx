import Navbar from '../components/Navbar/Navbar';
import ProjectSidebar from '../components/Project/ProjectSidebar';
import ProjectImages from '../components/Project/ProjectImages';

import styles from '../components/Project/Project.module.css';

import useScrollPercentage from '../components/useScrollPercentage';
import PageChange from '../components/PageChange';
import { useEffect, useState } from 'react';


const ProjectThree = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const isMobile = window.innerWidth < 768;

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
    <section className={styles.section} ref={scrollRef}>
      <PageChange pageLoaded={playAnimation} />
      <Navbar scrollProgress={scrollPercentage} />

      <ProjectSidebar 
        title="Wineland Golf Field" 
        desc="Zil Pasyon's architecture is designed and built to settle discretely among the Islands unique granite boulders. The phrase, '“We will have succeeded if nothing can be seen from outside the Island” was a starting point for this project which began with a Concept Design in 2005, reaching final completion in 2017. The Six Senses resort in the Seychelles Islands on the private island of Félicité comprises 15 Resort Villas with their own infinity pool and ocean view, 3 Oceanside Bars, its own helicopter pad as well as a small number of luxury hillside Private Residences, each with their own acrylic base pool." 
        location="Port Elizabeth"
        completion="2021"
      />

      <ProjectImages 
        height="100vh" 
        src="https://ik.imagekit.io/x29dtqzji/tr:w-1300/pexels-max-vakhtbovych-7534561.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750700207"
        alt="project-house-image" 
      />
      
      <ProjectImages 
        height="100vh" 
        src="https://ik.imagekit.io/x29dtqzji/tr:w-1300/pexels-saviesa-home-2089698.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750704913"
        alt="project-house-image" 
      />
      
      <ProjectImages 
        height="100vh" 
        src="https://ik.imagekit.io/x29dtqzji/tr:w-1300/pexels-pixabay-210265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674750703678"
        alt="project-house-image" 
      />

    </section>
  )
}

export default ProjectThree