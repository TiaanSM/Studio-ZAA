import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Intro from './components/Introduction/Intro';
import Projects from './components/Projects/Projects';
import Section from './components/Section/Section';
import Articles from './components/Articles/Articles';
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

        <Articles />
        
        </div>
      </div>
    </div>
  )
}

export default App
