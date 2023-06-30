import { Routes, Route } from "react-router-dom";
import  NavBar  from './pages/NavBar/NavBar.js'
import Home from './pages/Home/Home'
import Projects from "./pages/Projects/Projects.js";
import Resume from "./pages/Resume/Resume.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route 
        path="/"
        element={<Home/>}/>
      <Route 
        path="/projects"
        element={<Projects/>}/>
      <Route 
        path="/resume"
        element={<Resume/>}/>
    </Routes>
      
      

    </div>
  );
}

export default App;
