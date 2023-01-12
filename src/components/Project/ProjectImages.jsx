import styles from './Project.module.css';

const ProjectImages = (props) => {

  return (
    <div className={styles.imageContainer}>
        <img src={props.src} alt={props.alt} className={styles.image} />
    </div>
  )
}

export default ProjectImages