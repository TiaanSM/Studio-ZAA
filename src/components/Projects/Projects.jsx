import styles from './Projects.module.css';
import image1 from '../../assets/img/projectImage4.jpg';
import image2 from '../../assets/img/projectImage5.jpg';
import image3 from '../../assets/img/projectImage6.jpg';

const Projects = () => {
  return (
    <main className={styles.main}>

        <div className={styles.container}>
          <img src={image1} alt="" className={styles.projectImage} />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>
        </div>
        
        <div className={styles.container}>
          <img src={image2} alt="" className={styles.projectImage}  />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
        </div>
        <div className={styles.container}>
          <img src={image3} alt="" className={styles.projectImage}  />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
        </div>

    </main>
  )
}

export default Projects;