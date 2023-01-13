import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

import ArticleOne from './Pages/ArticleOne';
import ArticleTwo from './Pages/ArticleTwo';
import ArticleThree from './Pages/ArticleThree';
 
import ProjectOne from './Pages/ProjectOne';
import ProjectTwo from './Pages/ProjectTwo';
import ProjectThree from './Pages/ProjectThree';


function App() {

  

  

  return (
    <div className="App"  >

      <Routes>

        <Route path="/" element={ <Home/> } />

        <Route path="Project/Malbury-Ocean-View" element={ <ProjectOne /> } />
        <Route path="Project/Grover-Complex" element={ <ProjectTwo /> } />
        <Route path="Project/Wineland-Golf-Field" element={ <ProjectThree /> } />
      
        <Route path="Article/Architecture-and-change" element={ <ArticleOne />} />
        <Route path="Article/Modern-Design-And-Architecture" element={ <ArticleTwo /> } />
        <Route path="Article/Eco-Friendly-Designing" element={ <ArticleThree /> } />

      </Routes>

    </div>
      
  )
}

export default App
