
const ImageHeading = (props) => {

  const isMobile = window.innerWidth < 768;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto'
  }

  const titleStyles = {
    fontWeight: '600',
    padding: '12px 0 8px 0',
    color: isMobile ? props.color : 'black',
  }

  const linkStyles = {
    color: isMobile ? props.color : 'black'
  }

  return (

    <div style={containerStyle}>

        <h4 style={titleStyles}>{props.title}</h4>
        
        <a href="/" style={linkStyles}>{props.link}</a>

    </div>

  )
}

export default ImageHeading