import React from 'react'

const nextArticle = (props) => {

    const isMobile = window.innerWidth < 768;
    // move to article css

    const sectionStyle = {
        width: isMobile ? '100vw':'1100px',
        height: '100vh',
        backgroundColor: '#3d4442',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row'
    }

    const imageContainerStyle = {
        width: '60%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const imageStyle = {
        width: '500px',
        height: '85vh',
        backgroundColor: 'black',
    };

    const textContainerStyle = {
        width: '50%',
        height: '85vh',
        position: 'relative'
    }

    const linkStyle = {
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: '15px'
    }

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: '400',
        color: 'white',
        width: '15rem',
        position: 'absolute',
        bottom: '0'
    }

  return (
    <section style={sectionStyle}>
        <div style={imageContainerStyle}>
            <img src="" alt="" style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
            <p style={linkStyle}>Next Article</p>
            <h4 style={titleStyle}>{props.nextArticle}</h4>
        </div>
    </section>
  )
}

export default nextArticle