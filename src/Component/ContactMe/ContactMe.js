import React from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function ContactMe() {



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z0hyfxm', 'template_8o9ezlm', e.target, 'qRRBJU9ln1TKvORfF')
          .then((result) => {
              if(result.text){
                toast.success("Email Send Successfully")
              };
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset()
      };






  return (
    <section>
        <Toaster />
        <div class="hero min-h-screen p-4">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold"></h1>
                
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                <div class="card-body">
                    <form onSubmit={sendEmail}>
                            <div class="form-control">
                                <input type="text" placeholder="Enter Name" name="user_name" class="input input-bordered mb-3 bg-neutral" />
                            </div>

                            <div class="form-control">
                                <input type="email" placeholder="Email" name="user_email" class="input input-bordered mb-3 bg-neutral" />
                            </div>
                            <textarea class="textarea textarea-bordered bg-neutral justify-center " placeholder="Bio"></textarea>
                            <div class="form-control mt-6">
                                <button class="btn btn-secondary">submit</button>
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