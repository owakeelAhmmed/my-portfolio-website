import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const menu = <>
            <Link className='text-accent font-bold' to='/'>Home</Link>
            <Link className='text-accent font-bold'to='/projectcard'>Project</Link>
            <Link className='text-accent font-bold'to='/aboutme'>About Me</Link>
            <Link className='text-accent font-bold'to='/contactme'>Contact Us</Link>
            
    </>




  return (
    <section>
        <div class="navbar bg-slate-300">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li tabindex="0">
                    {menu}
                    </li>
                </ul>
                </div>
                <a class="btn btn-ghost text-accent normal-case text-xl"> portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                <li tabindex="0">
                    {menu}
                </li>
                </ul>
            </div>
            </div>
    </section>
  )
}

export default Navbar