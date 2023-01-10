import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

import useScrollPercentage from './components/useScrollPercentage';

import { Routes, Route } from 'react-router-dom';
import ArticleOne from './components/Article/ArticleOne';


function App() {

  const [scrollRef, scrollPercentage] = useScrollPercentage();

  

  return (
    <div className="App"  >

    <Navbar scrollProgress={scrollPercentage} />
      
      <div className="scroll-container" ref={scrollRef} >
        <div className="content-container">

      <ArticleOne />

      {/*}
        <Routes>
          <Route path='/' element={ <Home/> } />
        </Routes>
      */}
        </div>
      </div>
      
    </div>
  )
}

export default App
