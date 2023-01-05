import React from 'react'

const ImageHeading = (props) => {

    const containerStyles = {};

    const titleStyles = {};

    const linkStyles = {};

  return (

    <div style={containerStyles}>

        <h4 style={titleStyles}>{props.title}</h4>
        
        <a href="" style={linkStyles}>{props.link}</a>

    </div>

  )
}

export default ImageHeading