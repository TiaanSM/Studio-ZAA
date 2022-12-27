import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Intro from './components/Introduction/Intro';
import Projects from './components/Projects/Projects';
import Section from './components/Section/Section';
import Contact from './components/Contact/Contact';
import useScrollPercentage from './components/useScrollPercentage';



function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  

  return (
    <div className="App"  >

    <Navbar scrollProgress={scrollPercentage} />
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">
      
      
        <Header />
        
        <Intro />
        
        <Projects />

        <Section />

        <Contact />
        
        </div>
      </div>
    </div>
  )
}

export default App
