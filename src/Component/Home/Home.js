import React from 'react'


function Home() {
  return (
    <section className=''>
      <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar ">
          <div class="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
          <div style={{width:"450px"}}>
            <h1 class="text-5xl font-bold ">Box <span className='animate-ping'>Office</span> News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            
            <div>
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute  h-3 w-3 rounded-full bg-secondary opacity-75"></span>
              <span class="relative  rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <button class="btn btn-outline btn-secondary ">
              download
              </button>
            </div>
            
            
            
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home
