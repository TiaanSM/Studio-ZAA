import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';



import { Routes, Route } from 'react-router-dom';
import ArticleOne from './components/Article/ArticleOne';
import Project from './components/Project/Project';



function App() {

  

  

  return (
    <div className="App"  >

      <Project />

{/*

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Article/ArticleOne" element={<ArticleOne />} />
      </Routes>

*/}
   
    </div>
      
  )
}

export default App
