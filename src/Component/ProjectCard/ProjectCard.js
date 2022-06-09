import React from 'react';
import img1 from '../Images/Assignment12.png';
import img2 from '../Images/Assignment11.png';
import img3 from '../Images/Assignment10.png';



function ProjectCard() {



  return (
    <section className='px-8 '>
       <div className='flex justify-center '>
       <div class="card w-64 bg-neutral mr-3 shadow-xl">
              <figure><img className='rounded-md w-64 ' src={img1} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-primary">
                SUPER-GEAR
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <div class="card-actions justify-end mt-3">
                  <div class="badge badge-outline">MongoDB</div> 
                  <div class="badge badge-outline">React Query</div> 
                  <div class="badge badge-outline">Firebase authentication</div>
                  <div class="badge badge-outline">JWT</div>
                  <div class="badge badge-outline">Node.js</div> 
                  
                </div>
              </div>
            </div>
            {/* secend card */}
            <div class="card bg-neutral w-64 mr-3 shadow-xl">
              <figure><img src={img2} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                    medi-house
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Firebase authentication</div>
                  <div class="badge badge-outline">MongoDb</div> 
                  <div class="badge badge-outline">Node.js</div>
                  <div class="badge badge-outline">React router</div>
                  <div class="badge badge-outline">Bootstap</div> 
                </div>
              </div>
            </div>
            {/* third card */}
            <div class="card w-64 bg-neutral mr-3   shadow-xl">
              <figure><img src={img3} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                fit-for-the-future
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">React Router</div> 
                  <div class="badge badge-outline">React Hooks</div>
                  <div class="badge badge-outline">Firebase authentication</div>
                  <div class="badge badge-outline">Bootstrap</div>
                </div>
              </div>
            </div>
       </div>
        

    </section>
  )
}

export default ProjectCard