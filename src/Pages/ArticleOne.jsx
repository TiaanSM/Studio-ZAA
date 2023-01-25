import ArticleHero from '../components/Article/ArticleHero';
import NextArticle from '../components/Article/NextArticle';
import Navbar from '../components/Navbar/Navbar';

import useScrollPercentage from '../components/useScrollPercentage';
import PageChange from '../components/PageChange';
import '../App.css';
import { useEffect, useState } from 'react';

const ArticleOne = () => {

    const [scrollRef, scrollPercentage] = useScrollPercentage();
    const isMobile = window.innerWidth < 768;

    const paragraphContainerStyle = {
        height: '100vh',
        width: isMobile ? '100%' : '600px',
        height: isMobile ? 'auto' : '100vh',
        backgroundColor: 'whitesmoke',
        borderLeft: '1px solid rgb(90,90,90,0.50)'
    };

    const paragraphTextStyle = {
      padding: isMobile ? '2rem' : '3rem',
      fontSize: isMobile ? '1.1rem' : '1rem',
      lineHeight: isMobile ? '1.5rem' : '1rem'
    };

    const smallImageStyle = {
        display: isMobile ? 'none' : 'block',
        width: '700px',
        height: '100vh',
        objectFit: 'cover',
        backgroundColor: 'black'
    };

    const bigImageStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        backgroundColor: 'black'
    };

    const [playAnimation, setPlayAnimation] = useState(false);

    
    useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
    }, []);
  

  return (
    
      <>
      <PageChange pageLoaded={playAnimation} />
      <Navbar scrollProgress={scrollPercentage}/>
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">
        <ArticleHero 
        title="Architecture and change" 
        paragraphOne='The architecture of Richard Hywel Evans and his studio closely parallels key developments in 
        design, technology and urbanism over the past twenty-one years. 1997 feels almost antediluvian by
        modern standards, an era without social media, let alone the visual cornucopia of the online 
        design press. Search engine culture was still in its infancy; this was the year google.com was 
        first registered.'
        paragraphTwo="Commercial architecture was enduring the hangover from high-tech, with the 
        injection of investment and ideas from the National Lottery only just starting to make an impact 
        on the built environment. Architecture was building itself a nascent digital world, a low-resolution 
        culture that favoured spectacle and form over content and coherence."
        author="Johnathan Bell"
        />
        <div style={paragraphContainerStyle}>
            <p style={paragraphTextStyle}>
            Richard Hywel Evans began his studio in 1997. After studying at the Architectural Association in London, where his tutors included Nigel Coates and Daniel Weil. His final year saw him working with Peter Wilson which lead Hywel Evans to working with the Australian architects Daryl Jackson and Philip Cox and then on his return Richard Horden.<br/><br/>
            The first projects he worked on focused on leisure and hospitality, from swimming pools and spas to hotels and luxury villas. Back in the UK, Studio RHE began by translating a fluid, organic aesthetic into retail and leisure projects, including the Sweatshop chain of sportswear.<br/><br/>
            But it was with the new HQ building for Cellular Operations, a mobile technology company, in Swindon, that the first fruits of his design direction took seed.<br/><br/>
            Studio RHE won a competition for the project, building a 45,000 square foot HQ with curving glass walls and a natural ventilation system drawing cool air off the adjoining lake. Now known as Arclight House, the initial design combined boat-building technology with frameless faceted glass panels, with detail design that went far beyond the off-the-shelf style of most retail park design. These include a poured concrete and glass staircase, a colossal sliding glass entrance door, and myriad little touches that elevated the building far above the run of the mill.<br/><br/>
            Cellular Operations was a theatrical approach to a moribund genre, bringing learning from his years spent designing for clients in sun-kissed holiday spots and far-flung destinations. In its form, materials and functionality, the building set new standards and was part of a general revival of interest in workplace design.<br/><br/>
            </p>
        </div>

        <img src="" alt="" style={smallImageStyle} />

        <div style={paragraphContainerStyle}>
            <p style={paragraphTextStyle}>
            Richard Hywel Evans began his studio in 1997. After studying at the Architectural Association in London, where his tutors included Nigel Coates and Daniel Weil. His final year saw him working with Peter Wilson which lead Hywel Evans to working with the Australian architects Daryl Jackson and Philip Cox and then on his return Richard Horden.<br/><br/>
            The first projects he worked on focused on leisure and hospitality, from swimming pools and spas to hotels and luxury villas. Back in the UK, Studio RHE began by translating a fluid, organic aesthetic into retail and leisure projects, including the Sweatshop chain of sportswear.<br/><br/>
            But it was with the new HQ building for Cellular Operations, a mobile technology company, in Swindon, that the first fruits of his design direction took seed.<br/><br/>
            Studio RHE won a competition for the project, building a 45,000 square foot HQ with curving glass walls and a natural ventilation system drawing cool air off the adjoining lake. Now known as Arclight House, the initial design combined boat-building technology with frameless faceted glass panels, with detail design that went far beyond the off-the-shelf style of most retail park design. These include a poured concrete and glass staircase, a colossal sliding glass entrance door, and myriad little touches that elevated the building far above the run of the mill.<br/><br/>
            Cellular Operations was a theatrical approach to a moribund genre, bringing learning from his years spent designing for clients in sun-kissed holiday spots and far-flung destinations. In its form, materials and functionality, the building set new standards and was part of a general revival of interest in workplace design.<br/><br/>
            </p>
        </div>

        <img src="" alt="" style={bigImageStyle} />

        <div style={paragraphContainerStyle}>
            <p style={paragraphTextStyle}>
            Richard Hywel Evans began his studio in 1997. After studying at the Architectural Association in London, where his tutors included Nigel Coates and Daniel Weil. His final year saw him working with Peter Wilson which lead Hywel Evans to working with the Australian architects Daryl Jackson and Philip Cox and then on his return Richard Horden.<br/><br/>
            The first projects he worked on focused on leisure and hospitality, from swimming pools and spas to hotels and luxury villas. Back in the UK, Studio RHE began by translating a fluid, organic aesthetic into retail and leisure projects, including the Sweatshop chain of sportswear.<br/><br/>
            But it was with the new HQ building for Cellular Operations, a mobile technology company, in Swindon, that the first fruits of his design direction took seed.<br/><br/>
            Studio RHE won a competition for the project, building a 45,000 square foot HQ with curving glass walls and a natural ventilation system drawing cool air off the adjoining lake. Now known as Arclight House, the initial design combined boat-building technology with frameless faceted glass panels, with detail design that went far beyond the off-the-shelf style of most retail park design. These include a poured concrete and glass staircase, a colossal sliding glass entrance door, and myriad little touches that elevated the building far above the run of the mill.<br/><br/>
            Cellular Operations was a theatrical approach to a moribund genre, bringing learning from his years spent designing for clients in sun-kissed holiday spots and far-flung destinations. In its form, materials and functionality, the building set new standards and was part of a general revival of interest in workplace design.<br/><br/>
            </p>
        </div>

        <img src="" alt="" style={smallImageStyle} />

        <div style={paragraphContainerStyle}>
            <p style={paragraphTextStyle}>
            Richard Hywel Evans began his studio in 1997. After studying at the Architectural Association in London, where his tutors included Nigel Coates and Daniel Weil. His final year saw him working with Peter Wilson which lead Hywel Evans to working with the Australian architects Daryl Jackson and Philip Cox and then on his return Richard Horden.<br/><br/>
            The first projects he worked on focused on leisure and hospitality, from swimming pools and spas to hotels and luxury villas. Back in the UK, Studio RHE began by translating a fluid, organic aesthetic into retail and leisure projects, including the Sweatshop chain of sportswear.<br/><br/>
            But it was with the new HQ building for Cellular Operations, a mobile technology company, in Swindon, that the first fruits of his design direction took seed.<br/><br/>
            Studio RHE won a competition for the project, building a 45,000 square foot HQ with curving glass walls and a natural ventilation system drawing cool air off the adjoining lake. Now known as Arclight House, the initial design combined boat-building technology with frameless faceted glass panels, with detail design that went far beyond the off-the-shelf style of most retail park design. These include a poured concrete and glass staircase, a colossal sliding glass entrance door, and myriad little touches that elevated the building far above the run of the mill.<br/><br/>
            Cellular Operations was a theatrical approach to a moribund genre, bringing learning from his years spent designing for clients in sun-kissed holiday spots and far-flung destinations. In its form, materials and functionality, the building set new standards and was part of a general revival of interest in workplace design.<br/><br/>
            </p>
        </div>

        <NextArticle 
        nextArticle="Modern Design And Architecture" 
        nextArticleLink="/Article/Modern-Design-And-Architecture"
        />
        </div>
      </div>
    </>
  )
}

export default ArticleOne