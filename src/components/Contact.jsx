import touch from '../assets/touch.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from 'sweetalert';

const Contact = () => {
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    swal("Messaged successfully!", {
                        icon: "success",
                    });
                    form.current.reset();
                },
                (error) => {
                    swal("Failed to message!", {
                        icon: "warning",
                    });
                },
            );
    }
    return (
            <div id="contact" className="hero min-h-screen bg-gradient-to-b from-black/90 to-gray-900 py-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-orange-500 font-bold text-center">Get in touch</h1>
                        <img src={ touch } alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-lg bg-transparent border border-orange-500">
                        <form ref={form} className="card-body" onSubmit={onSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone No." name='phone' className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" name='subject' className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea placeholder="Your Message" name='message' className="textarea textarea-bordered textarea-lg bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-transparent hover:bg-orange-500 text-white border-orange-500 hover:border-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Contact;