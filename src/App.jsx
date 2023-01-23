import './App.css';
import { lazy , Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavProjects from './Pages/NavProjects';
import NavJournal from './Pages/NavJournal';
import About from './Pages/About';

const ProjectOne = lazy(() => import('./Pages/ProjectOne'));
const ProjectTwo = lazy(() => import('./Pages/ProjectTwo'));
const ProjectThree = lazy(() => import('./Pages/ProjectThree'));

const ArticleOne = lazy(() => import('./Pages/ArticleOne'));
const ArticleTwo = lazy(() => import('./Pages/ArticleTwo'));
const ArticleThree = lazy(() => import('./Pages/ArticleThree'));

function App() {
  
  // move all styles into one folder.
  // lazy import loading /> orange div.
  // document.onLoad triggers opening animation.
  // add all images, optomized.
  // all links work.
  // all pages finished.
  // all loading page switch animations working.
  // clean up code, best practices.

  // projectsNav component /> image? TextColor = inView ? black : gray; 

  return (
    <div className="App"  >
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
      
        <Route path="/" element={ <Home/> } />
        <Route path="/Projects" element={ <NavProjects /> } />
        <Route path="/Journal" element={ <NavJournal /> } />
        <Route path="/Contact" element={ <Contact /> } />
        <Route path="/About" element={ <About /> } />

        <Route path="Project/Malbury-Ocean-View" element={ <ProjectOne /> } />
        <Route path="Project/Grover-Complex" element={ <ProjectTwo /> } />
        <Route path="Project/Wineland-Golf-Field" element={ <ProjectThree /> } />

        <Route path="Article/Architecture-and-change" element={ <ArticleOne />} />
        <Route path="Article/Modern-Design-And-Architecture" element={ <ArticleTwo /> } />
        <Route path="Article/Eco-Friendly-Designing" element={ <ArticleThree /> } />
       
      </Routes>
    </Suspense>
    </div>
      
  )
}

export default App
