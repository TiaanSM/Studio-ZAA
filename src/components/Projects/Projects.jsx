import styles from './Projects.module.css';
import image1 from '../../assets/img/projectImage4.webp';
import image2 from '../../assets/img/projectImage5.webp';
import image3 from '../../assets/img/projectImage6.webp';

import Image from '../Image.jsx';
import ImageHeading from '../ImageHeading.jsx';

import { Link } from 'react-router-dom';

const Projects = () => {



  return (
    <main className={styles.main}>

        <div className={styles.container}>
        <Link className={styles.linkStyle} to="Project/Malbury-Ocean-View">
          <Image width='100%' height="530px" src={image1} imagealt="house-image" />
          <ImageHeading title="Malbury Ocean View" link="View Project" color="black" />
        </Link>
        </div>
        
        <div className={styles.container}>
        <Link className={styles.linkStyle} to="Project/Grover-Complex">
          <Image width='100%' height="530px" src={image2} imagealt="house-image" />
          <ImageHeading title="Grover Complex" link="View Project" color="black" />
        </Link>
        </div>

        <div className={styles.container}>
        <Link className={styles.linkStyle} to="Project/Wineland-Golf-Field">
          <Image width='100%' height="530px" src={image3} imagealt="house-image" />
          <ImageHeading title="Wineland Golf Field" link="View Project" color="black" />      
        </Link>
        </div>

    </main>
  )
}

export default Projects;


/*
<div className={styles.imageContainer} ref={ref}>
          <img src={image1} alt="house-image" className={inView ? styles.projectImage : styles.projectImageA} />
         </div>
*/