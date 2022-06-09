import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function SideBar() {
  return (
    <section>
        <div class="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center justify-center">
            <Outlet/>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
          </div> 
          <div class="drawer-side bg-accent">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            
              
            <ul class="menu p-4 overflow-y-auto w-60  text-base-content">
              {/* avater img */}
            <div class="avatar mb-8">
                <div class="w-24 mx-auto h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>

{/* ul & li start */}
              <button className='btn btn-outline btn-secondary text-accent  '><Link to='/'>Home</Link></button>
              
            </ul>
          
          </div>
        </div>
    </section>
  )
}

export default SideBar