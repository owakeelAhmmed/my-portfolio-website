import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function ProjectCard() {
      const [projects , setprojects] = useState([]);
        console.log(projects)

      useEffect(() =>{
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setprojects(data))
      },[])
   


  return (
    <section className='mt-40 px-12'>
       <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
         {
           projects.map(p => 
           <div key={p.id} class="card   mr-3 shadow-xl">
           <img style={{height:"350px"}} src={p.image} alt="Shoes" />
             <div class="card-body">
               <h2 class="card-title text-gray-500">
               {p.name}
                 <div class="badge badge-secondary">NEW</div>
               </h2>
               <div class="card-actions justify-end mt-3">
               <Link to={`/projectinfo/${p.id}`}><button class="btn btn-outline btn-secondary btn-xs">Live</button></Link>
               <Link to={`/projectinfo/${p.id}`}><button class="btn btn-outline btn-secondary btn-xs">Code</button></Link>
               <Link to={`/projectinfo/${p.id}`}><button class="btn btn-outline btn-secondary btn-xs">See More</button></Link>
                
               </div>
             </div>
           </div>)
         }
       
       </div>
        

    </section>
  )
}

export default ProjectCard



 {/* <div class="badge badge-outline">MongoDB</div> 
                  <div class="badge badge-outline">React Query</div> 
                  <div class="badge badge-outline">Firebase authentication</div>
                  <div class="badge badge-outline">JWT</div>
                  <div class="badge badge-outline">Node.js</div>  */}