import React from 'react';
import { useForm } from '@formspree/react';
export default function Contact() {
    const [state, handleSubmit] = useForm("mgedjlbr");
    if (state.succeeded) {
        return (
            <div className='flex flex-col justify-center text-center'>
                <form onSubmit={handleSubmit} className="bg-slate-900 w-full flex flex-col rounded-md px-10 py-5 gap-8 mt-32">
                    <span className="text-2xl text-green-400">Thank you for sending a message! I usually respond within 2 business days!</span>
                    <input id="email" type="email" name="email" placeholder="Email Address" className="p-3 bg-slate-900 text-light placeholder-light border-b-2 rounded-md"></input>
                    <textarea id="message" name="message" placeholder="Message" className="p-3 bg-slate-900 text-light placeholder-light border-b-2 rounded-md" />
                    <button type="submit" className="bg-med text-white-light py-5 px-10 mx-auto rounded-md hover:scale-105 duration-200 hover:bg-med-accent" disabled={state.submitting}>Submit</button>
                </form>
            </div>
        )
    }
    return (

        <div className='flex flex-col justify-center text-center'>
            {/* <span className="text-slate-300 text-6xl mt-32">Hello, I am still being made! Come back soon!</span>
            <span className="text-slate-300 text-6xl mt-32">In the meantime, feel free to contact me via... <br />
                EMAIL : <span className='text-cyan-400'>ohutchyhutch@gmail.com</span><br />
                DISCORD : <span className='text-cyan-400'>Forodin#3951</span></span> */}

            <form onSubmit={handleSubmit} className="bg-slate-900 w-full flex flex-col rounded-md px-10 py-12 text-2xl gap-8 mt-32">
                <input id="email" type="email" name="email" placeholder="Email Address" className="p-3 bg-slate-900 text-light placeholder-light border-b-2 rounded-md"></input>
                <textarea id="message" name="message" placeholder="Message" className="p-3 bg-slate-900 text-light placeholder-light border-b-2 rounded-md" />
                <button type="submit" className="bg-med-accent text-light py-5 px-10 mx-auto rounded-md hover:scale-105 duration-200 hover:bg-slate-800 hover:text-light" disabled={state.submitting}>Submit</button>
            </form>
        </div>
    )
}