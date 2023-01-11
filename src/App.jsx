import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

import useScrollPercentage from './components/useScrollPercentage';

import { Routes, Route } from 'react-router-dom';
import ArticleOne from './components/Article/ArticleOne';
import Project from './components/Project/Project';



function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  

  return (
    <div className="App"  >

    <Navbar scrollProgress={scrollPercentage} />
      
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Article/ArticleOne" element={<ArticleOne />} />
      </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
