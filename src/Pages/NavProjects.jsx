import Navbar from "../components/Navbar/Navbar";
import useScrollPercentage from '../components/useScrollPercentage';
import styles from '../components/styles/NavProjects.module.css';
import PageChange from '../components/PageChange';
import ProjectImageNav from "../components/Project/ProjectImageNav";

import image1 from '../assets/img/projectImage4.webp';
import image2 from '../assets/img/projectImage5.webp';
import image3 from '../assets/img/projectImage6.webp';

import Image from '../components/Image.jsx';

import { useEffect, useState } from 'react';


const NavProjects = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();

    const [playAnimation, setPlayAnimation] = useState(false);

    const isMobile = window.innerWidth < 768;

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
    
    <section  className={styles.section} ref={scrollRef}>
        <PageChange pageLoaded={playAnimation} />
        <Navbar scrollProgress={scrollPercentage} />
 
      <div className={styles.container}>
        
        <ProjectImageNav 
            title="Malbury Ocean View"
            positionTop="50vh"
            linkSrc="Malbury-Ocean-View"
            src={image1}
        />
        
        <ProjectImageNav 
            title="Grover Complex"
            positionTop="57vh"
            linkSrc="Grover-Complex"
            src={image2}
        />
        
        <ProjectImageNav 
            title="Wineland Golf Field"
            positionTop="64vh"
            linkSrc="Wineland-Golf-Field"
            src={image3}
        />

        <ProjectImageNav 
            title="Coming Soon"
            positionTop="71vh"
        /> 
        </div>

    </section>
  )
}

export default NavProjects