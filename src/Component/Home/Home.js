import React from 'react'
import img1 from '../Images/my-pic.png';
import img2 from '../Images/My-Resume.pdf';
import img3 from '../Images/bg.jpg';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';


function Home() {

 

  return (
    <section  className=' scroll-smooth  '>
      <div style={{
        backgroundImage:`url(${img3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
        <div class="hero ">
          <div class="hero-content flex mt-32 justify-end flex-col lg:flex-row-reverse">
          <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  ">
            <img style={{width:"400px"}} src={img1} alt=''/>
           </div>
            <div>
              <div className='p-4'>
                  <h1 class="text-5xl text-secondary font-bold ">Owakeel <span className='animate-ping'>Ahmmed</span></h1>
                  <p class="py-6 text-gray-400">My goal is to become a software developer.. I am working hard to reach my goal...</p>
              <Link to={img2} target="_blank" download><button class="btn btn-outline btn-secondary ">download resume</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <ProjectCard/>
      <AboutMe/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </section>
  )
}

export default Home
