import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import Blogs from './Component/Blogs/Blogs';
import ContactMe from './Component/ContactMe/ContactMe';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Navbar/Navbar';
import ProjectCard from './Component/ProjectCard/ProjectCard';
import ProjectDatile from './Component/ProjectCard/ProjectDatile';
import ProjectInfo from './Component/ProjectCard/ProjectInfo';


function App() {
  
  return (
    <section className="max-w-7xl mx-auto" >
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projectcard" element={<ProjectCard/>}/>
            <Route path="/projectinfo/:id" element={<ProjectInfo/>}/>
            <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </section>
  );
}

export default App;
