import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Intro from '../components/Introduction/Intro';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section/Section';
import Articles from '../components/Articles/Articles';
import useScrollPercentage from '../components/useScrollPercentage';
import '../App.css';


const Home = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <>
    <Navbar scrollProgress={scrollPercentage} />
      
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">

        <Header />
        <Intro />
        <Projects />
        <Section />
        <Articles />

        </div>
      </div>
    </>
  )
}

export default Home