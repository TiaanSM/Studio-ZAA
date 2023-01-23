import { useInView } from 'react-intersection-observer';

const ProjectImageNav = (props) => {

    const containerStyles = {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    const imageContainerStyles = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover'
    }

    const titleContainerStyles = {
      width: '50vw',
      height: '50vh'
    }

    const titleStyles = {
      fontSize: '2rem',
      color: inView ? 'black' : 'gray',
      position: 'absolute',
    }

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: .40,
      triggerOnce: false
  });

  return (
    <div style={containerStyles}>
      <div ref={ref} style={imageContainerStyles}>
        <img src={props.src} alt={props.alt} />
      </div>
      <span style={titleContainerStyles}>
        <h3 style={titleStyles}>{props.title}</h3>
      </span>
    </div>
  )
}

export default ProjectImageNav