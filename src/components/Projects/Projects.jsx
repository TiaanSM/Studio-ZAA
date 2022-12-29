import styles from './Projects.module.css';

const Projects = () => {
  return (
    <main className={styles.main}>

        <div className={styles.container}>
          <img src="" alt="" className={styles.projectImage} />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>
        </div>
        
        <div className={styles.container}>
          <img src="" alt="" className={styles.projectImage}  />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
        </div>
        <div className={styles.container}>
          <img src="" alt="" className={styles.projectImage}  />
          <p className={styles.projectName}>Project name</p>
          <a href="" className={styles.link}>View Project</a>         
        </div>

    </main>
  )
}

export default Projects;