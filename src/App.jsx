import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Intro from './components/Introduction/Intro';
import Projects from './components/Projects/Projects';
import useScrollPercentage from './components/useScrollPercentage';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  

  return (
    <div className="App"  >

    <Navbar scrollProgress={scrollPercentage} />
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">
      <ParallaxProvider scrollAxis='horizontal'>
        
        <Header />
        <Intro />
        <Projects />

        </ParallaxProvider>
        </div>
      </div>
    </div>
  )
}

export default App
