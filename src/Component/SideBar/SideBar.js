import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import img1 from '../Images/my-pic.png';

function SideBar() {
  return (
    <section className='px-8'>
        <div class="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center justify-center">
            <Outlet/>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
          </div> 
          <div class="drawer-side bg-accent  rounded-full">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            
              
            <ul class="menu p-4 overflow-y-auto w-60  text-base-content">
              {/* avater img */}
            <div class="avatar mb-8">
                <div class="w-24 mx-auto h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img1} alt='' />
                </div>
              </div>
              

{/* ul & li start */}
                <Link to='/'><button className='btn btn-outline btn-secondary text-accent mb-5 py-2 '>Home</button></Link>
                <Link to='projectcard'><button className='btn btn-outline btn-secondary text-accent mb-5 '>Project</button></Link>
                <Link to='blog'><button className='btn btn-outline btn-secondary text-accent mb-5 '>Blogs</button></Link>
                <Link to='aboutme'><button className='btn btn-outline btn-secondary text-accent mb-5 '>About Me</button></Link>
                <Link to='contactme'><button className='btn btn-outline btn-secondary text-accent  '>Contact Me</button></Link>
              
            </ul>
          
          </div>
        </div>
    </section>
  )
}

export default SideBar