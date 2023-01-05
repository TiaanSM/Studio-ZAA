import { useInView } from 'react-intersection-observer';

const Image = (props) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .30,
        triggerOnce: true
    });

    const containerStyles = {
        width: props.width,
        height: props.height,
        overflow: 'hidden',
    };

    const imageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: `${inView ? 'scale(1)' : 'scale(2)'}`,
        transition: 'all 1s ease'
    }


  return (
    <div style={containerStyles} ref={ref}>
        <img src={props.src} alt={props.imagealt} style={imageStyles} />
    </div>
  )
}

export default Image