
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
    color: isMobile ? props.color : 'black',
    textDecoration: isMobile ? props.color : 'black underline',
  }

  return (

    <div style={containerStyle}>

        <h4 style={titleStyles}>{props.title}</h4>
        
        <p style={linkStyles}>{props.link}</p>

    </div>

  )
}

export default ImageHeading