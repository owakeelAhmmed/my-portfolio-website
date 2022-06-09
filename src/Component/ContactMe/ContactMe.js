import React from 'react'
import emailjs from '@emailjs/browser';

function ContactMe() {



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z0hyfxm', 'template_8o9ezlm', e.target, 'qRRBJU9ln1TKvORfF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };






  return (
    <section>
        <div class="hero min-h-screen p-4">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold"></h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                <div class="card-body">
                    <form onSubmit={sendEmail}>
                            <div class="form-control">
                                <input type="text" placeholder="Enter Name" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">submit</button>
                            </div>
                    </form>
                    
                </div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default ContactMe