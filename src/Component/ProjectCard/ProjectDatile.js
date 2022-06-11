import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import ProjectInfo from './ProjectInfo';


function ProjectDatile() {
  const [projectInfos , setprojectInfos] = useState([]);
  const {id} = useParams();
  console.log(projectInfos)


    useEffect(() =>{
      fetch('https://projectinfo.free.beeceptor.com/')
      .then(Response => Response.json())
      .then(data => setprojectInfos(data))
    },[])


  return (
    <section>
        <div className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-100'>
          {
            projectInfos.map(project => <ProjectInfo
            key={project.id}
            project={project}
            id={id}
            ></ProjectInfo>)
          }
        </div>
    </section>
  )
}

export default ProjectDatile