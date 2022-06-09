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
              
              <li className='btn btn-outline btn-secondary text-accent mb-5 '><Link to='/'>Home</Link></li>
              <li className='btn btn-outline btn-secondary text-accent mb-5 '><Link to='contactme'>Contact Me</Link></li>
              <li className='btn btn-outline btn-secondary text-accent  '><Link to='projectcard'>Project</Link></li>
            </ul>
          
          </div>
        </div>
    </section>
  )
}

export default SideBar