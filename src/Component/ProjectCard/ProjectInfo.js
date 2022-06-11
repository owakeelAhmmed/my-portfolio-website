import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function ProjectInfo({project, id}) {
    console.log(project)
    const { image1, name} = project;
    // const {id} = useParams();
  return (
    <section className='px-12'>
        <h1 className='text-center text-3xl'> Project No: {id}</h1>
        <h1 className='text-center text-3xl'> Project No: {name}</h1>

        <div className=' '>
        <div class=" shadow-xl">
            <img src={image1} alt="Shoes" />
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
            
            </div>
        </div>
    </section>
  )
}

export default ProjectInfo