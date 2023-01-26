import './App.css';
import { lazy , Suspense } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';

import Loading from './components/Project/Loading';
import Home from './Pages/Home';

const Contact = lazy(() => import('./Pages/Contact'));
const NavJournal = lazy(() => import('./Pages/NavJournal'));
const NavProjects = lazy(() => import('./Pages/NavProjects'));
const About = lazy(() => import('./Pages/About'));


const ProjectOne = lazy(() => import('./Pages/ProjectOne'));
const ProjectTwo = lazy(() => import('./Pages/ProjectTwo'));
const ProjectThree = lazy(() => import('./Pages/ProjectThree'));

const ArticleOne = lazy(() => import('./Pages/ArticleOne'));
const ArticleTwo = lazy(() => import('./Pages/ArticleTwo'));
const ArticleThree = lazy(() => import('./Pages/ArticleThree'));


function App() {
  

  return (
    <div className="App"  >
    <Suspense fallback={ <Loading /> }>
      
      <Routes>
      
        <Route exact path="/" element={ <Home/> } />
          
        <Route path="/Project" element={ <NavProjects /> } />
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
