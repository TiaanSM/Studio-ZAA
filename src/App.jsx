import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import useScrollPercentage from './components/useScrollPercentage';


function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  let scrollValue = 0;

  const handleScroll = (event) => {
    scrollValue = event.deltaY;
    console.log(scrollValue);
    return scrollValue;
  }

  return (
    <div className="App"  >

        <Navbar scrollProgress={scrollPercentage} />
      <div className="scroll-container" ref={scrollRef} onWheel={handleScroll}>
        <div className="content-container">

        
        <Header />
        <Projects />

        </div>
      </div>
    </div>
  )
}

export default App
