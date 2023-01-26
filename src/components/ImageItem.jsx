import styles from './Styles/NavJournal.module.css';

const ImageItem = (props) => {

  return (
                
        <div className={styles.imageContainer}>

            <img src={props.imgSrc} alt={props.imgAlt} className={styles.Image} style={{height: props.height}} />

                <div className={styles.textContainer}>
                    <h4 className={styles.articleTitle}>{props.title}</h4>
                    <p className={styles.link}>{props.link}</p>
                </div>
        </div>
  )
}

export default ImageItem