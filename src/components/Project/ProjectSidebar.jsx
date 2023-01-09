import styles from './Project.module.css';

const ProjectSidebar = () => {

    let projectTitle = 'The Grmophone works';
    let projectDesc = 'anfsn sifoins snfisefnie eifosf eifslslng dknfds osfiwef ejfoijg skfspkfpeo efojej goej pg od sjejir spjgsp pwpdj do gdjvmbr9 r9 sjglsj vidjg;sjgi rijsrgls sijgsldijg djid dijdsl lslsls';
    let nextProjectTitle = 'Republic';

  return (

    <aside className={styles.aside}>
        <div className={styles.headingContainer}>
            <h2 className={styles.projectTitle}>{projectTitle}</h2>
            <p className={styles.projectDesc}>{projectDesc}</p>
        </div>
        <span className={styles.footerContainer}>
            <h4 className={styles.location}>Location<br/>{projectLocation}</h4>
            <h4 className={styles.completion}>Completion<br/>{projectCompletion}</h4>
        </span>
        <div>
            <a href="/">
                <p>Next Project</p>
                <h5>{nextProjectTitle}</h5>
            </a>
        </div>
    </aside>

  )
}

export default ProjectSidebar