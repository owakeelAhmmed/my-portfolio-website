import React from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import img1 from '../Images/contact.jpg';

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
    <section className='px-12'>
        <Toaster />
        <div class="hero p-4">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                <img src={img1} alt=""/>
                
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div class="card-body">
                    <form onSubmit={sendEmail}>
                            <div class="form-control">
                                <input type="text" placeholder="Enter Name" name="user_name" class="input input-bordered mb-3 bg-gray-200" />
                            </div>

                            <div class="form-control">
                                <input type="email" placeholder="Email" name="user_email" class="input input-bordered mb-3 bg-gray-200" />
                            </div>
                            <textarea class="textarea textarea-bordered bg-gray-200 justify-center " placeholder="Bio"></textarea>
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