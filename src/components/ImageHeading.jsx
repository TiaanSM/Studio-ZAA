import styles from '../components/TextStyles.module.css';

const ImageHeading = (props) => {

  return (

    <div className={styles.headingContainer}>

        <h4 className={styles.headingTitle}>{props.title}</h4>
        
        <a href="/" className={styles.headingLink}>{props.link}</a>

    </div>

  )
}

export default ImageHeading