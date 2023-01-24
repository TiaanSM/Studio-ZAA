import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from '../Styles/NavProjects.module.css';

const ProjectImageNav = (props) => {

    const containerStyles = {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
    }

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: .65,
      triggerOnce: false
    });

    const titleStyles = {
      width: '50%',
      fontSize: '3rem',
      fontWeight: '300',
      color: inView ? 'black' : 'lightgray',
      position: 'fixed',
      top: props.positionTop,
      left: '50vw',
      transition: 'all 0.5s ease',
      paddingLeft: '3rem'
    }

  return (
    <div style={containerStyles}>
      
      <Link to={props.linkSrc}>
      <div ref={ref} className={styles.imageContainerStyle}>
        <img src={props.src} alt={props.alt} />
      </div>
      </Link>

       <Link to={props.linkSrc}>
        <h3 style={titleStyles}>{props.title}</h3>
       </Link>
     
    </div>
  )
}

export default ProjectImageNav