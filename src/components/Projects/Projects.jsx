import styles from './Projects.module.css';
import image1 from '../../assets/img/projectImage4.webp';
import image2 from '../../assets/img/projectImage5.webp';
import image3 from '../../assets/img/projectImage6.webp';

import { useInView } from 'react-intersection-observer';
import Image from '../Image.jsx';

const Projects = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .80,
    triggerOnce: true
  });


  return (
    <main className={styles.main}>

        <div className={styles.container}>

         <Image width='100%' height="520px" src={image1} imagealt="house-image" />

          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>
        </div>
        
        <div className={styles.container}>
         <Image width='100%' height="520px" src={image2} imagealt="house-image" />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
        </div>
        <div className={styles.container}>
         <Image width='100%' height="520px" src={image3} imagealt="house-image" />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
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