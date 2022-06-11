import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../Images/education.jpg';

function Education() {
  return (
    <section style={{
        backgroundImage:`url(${img1})`,
        backgroundPosition:'center', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
        <div class="hero  opacity-75 bg-gradient-to-r from-slate-600 to-slate-600 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div className='lg:flex justify-center'>
                        <div>
                        <h1 class="text-3xl text-primary font-bold">SSC</h1>
                        <p className='text-primary font-bold'>Secondary School Certificate.</p>
                        <p className='text-primary font-bold'>Thut Paikar High School</p>
                        <ul class="list-inside text-primary font-bold">
                            <li>
                                Examination 2016
                            </li>
                            <li>
                                Science Group
                            </li>
                            <li>
                                GPA 4.22
                            </li>
                        </ul>
                        </div>

                        <div>
                            <h1 class="text-2xl text-primary font-bold">Diploma in Engineering</h1>
                            <p className='text-primary font-bold'>Patuakhali Polytechic institute</p>
                            <ul class="list-inside text-primary font-bold">
                                <li>
                                    Section 2016-17
                                </li>
                                <li>
                                    computer & science technology
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div style={{width:"250px",height:"400px"}} class="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div  class="card-body">
                <button class="btn btn-secondary">Education</button>
                <button class="btn btn-secondary">Skill</button>
                </div>
                </div>


            </div>
            </div>
    </section>
  )
}

export default Education