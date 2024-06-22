import touch from '../assets/touch.png';

const Contact = () => {
    return (
            <div id="contact" className="hero min-h-screen bg-gradient-to-b from-black/90 to-gray-900 py-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-orange-500 font-bold text-center">Get in touch</h1>
                        <img src={ touch } alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-lg bg-transparent border border-orange-500">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone No." className="input input-bordered bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg bg-transparent border-orange-500 focus:bg-orange-200 text-white focus:text-black" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-transparent hover:bg-orange-500 text-white border-orange-500 hover:border-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Contact;