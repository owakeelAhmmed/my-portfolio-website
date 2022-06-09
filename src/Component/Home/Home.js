import React from 'react'
import img1 from '../Images/my-pic.png';
import img2 from '../Images/My-Resume.pdf';
import { saveAs } from "file-saver";
import { Link } from 'react-router-dom';

function Home() {

    // const saveFile = () => {
    //   saveAs(
    //       "{img2}"
    //   );
    // };






  return (
    <section className=''>
      <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar ">
          <div class="w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img1} alt=''/>
          </div>
        </div>
          <div style={{width:"450px"}}>
            <h1 class="text-5xl font-bold ">Owakeel <span className='animate-ping'>Ahmmed</span></h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            
            <div>
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute  h-3 w-3 rounded-full bg-secondary opacity-75"></span>
              <span class="relative  rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            
            <Link to={img2} target="_blank" download>
            <button  class="btn btn-outline btn-secondary ">download resume</button>
            </Link>
            </div>
           
            
            
          </div>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Home
