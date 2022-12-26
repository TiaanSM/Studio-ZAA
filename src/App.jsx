import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import useScrollPercentage from './components/useScrollPercentage';


function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <div className="App" ref={scrollRef}>
        <Navbar scrollProgress={scrollPercentage} />
        <Header />
        <Projects />
    </div>
  )
}

export default App
