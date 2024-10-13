import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div id="home" className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MN13Rcd/banner.png)' }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-screen-lg mt-16">
                    <div className="p-10 bg-black bg-opacity-50 backdrop-blur-md">
                        <h1 className="mb-5 text-5xl md:text-6xl font-bold">Hello! I&apos;m <span className="text-orange-500">Shahriar Shawon</span></h1>
                        <h2 className="text-4xl font-bold mb-5">
                            <Typewriter cursorStyle='_' cursor={true} loop={true} words={['Web Developer', 'Front-end Engineer', 'Problem Solver', 'Programmer']} />
                        </h2>
                        <p className="mb-5 text-lg">I&apos;m an enthusiastic web developer and programmer. Using JavaScript, React, Tailwind, Node.js, Express.js, MongoDB, I create user-friendly web applications with an emphasis on functionality and user experience.</p>
                        <div className="flex justify-center gap-3 mb-5">
                            <a className="btn btn-circle btn-outline border-orange-500" href="https://www.linkedin.com/in/shahriar-shawon-ece" target="blank">
                                <FaLinkedin className="text-orange-500 text-3xl" />
                            </a>
                            <a className="btn btn-circle btn-outline border-orange-500" href="https://github.com/ShawonECE" target="blank">
                                <FaGithub className="text-orange-500 text-3xl" />
                            </a>
                            <a className="btn btn-circle btn-outline border-orange-500" href="https://www.facebook.com/shahriar.shawon.790" target="blank">
                                <FaFacebookSquare className="text-orange-500 text-3xl" />
                            </a>
                        </div>
                        <button className="btn text-lg bg-transparent text-white hover:bg-orange-500 hover:border-0 border-orange-500"><HashLink smooth to="/#contact">Let&apos;s connect</HashLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;