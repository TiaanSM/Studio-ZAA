import styles from './Project.module.css';

const ProjectSidebar = (props) => {

  return (

    <aside className={styles.aside}>
        <div className={styles.headingContainer}>
            <h2 className={styles.projectTitle}>{props.projectTitle}</h2>
            <p className={styles.projectDesc}>{props.projectDesc}</p>
        </div>
        <span className={styles.footerContainer}>
            <h4 className={styles.location}>Location<br/>{props.projectLocation}</h4>
            <h4 className={styles.completion}>Completion<br/>{props.projectCompletion}</h4>
        </span>
        <div>
            <a href="/">
                <p>Next Project</p>
                <h5>{props.nextProjectTitle}</h5>
            </a>
        </div>
    </aside>

  )
}

export default ProjectSidebar