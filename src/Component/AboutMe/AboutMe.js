import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import img2 from '../Images/My-Resume.pdf';

function AboutMe() {
  return (
    <section>
        <div>
        <h1 className='text-4xl text-white font-bold text-center'>About Me</h1>
        <div class="hero  ">
            <div class="hero-content flex-col mt-20 lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                  <div style={{width:"500px", padding: "15px"}}>
                    <h1 className='text-4xl text-secondary font-bold mb-5'>I'm Owakeel Ahmmed</h1>
                    <h3 className='text-xl text-gray-500 font-bold mb-5'>I'm a font-end developer</h3>
                   <p className='text-gray-400 font-bold'>My goal is to become a software developer.. I am working hard to reach my goal..</p>
                  </div>
                </div>

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                
                  <div className='animate-bounce w-6 h-6 text-5xl mb-24 text-green-500 mx-auto '><BsFillArrowDownCircleFill/> </div>

                  <div className='flex justify-center '>
                  <Link to={img2} target="_blank" download><button class="btn btn-outline btn-secondary ">resume</button></Link>
                  </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe