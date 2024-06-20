import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MN13Rcd/banner.png)' }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-screen-lg mt-16">
                    <div className="p-10 bg-black bg-opacity-50 backdrop-blur-md">
                        <h1 className="mb-5 text-5xl md:text-6xl font-bold">Hello! I&apos;m <span className="text-orange-500">Shahriar Shawon</span></h1>
                        <h2 className="text-4xl font-bold mb-5">Web Developer</h2>
                        <p className="mb-5 text-lg">I&apos;m an enthusiastic web developer and programmer. Using JavaScript, React, Tailwind, Node.js, Express.js, MongoDB, I create user-friendly web applications with an emphasis on functionality and user experience.</p>
                        <div className="flex justify-center gap-3 mb-5">
                            <button className="btn btn-circle btn-outline border-orange-500">
                                <FaLinkedin className="text-orange-500 text-3xl" />
                            </button>
                            <button className="btn btn-circle btn-outline border-orange-500">
                                <FaGithub className="text-orange-500 text-3xl" />
                            </button>
                        </div>
                        <button className="btn text-lg bg-transparent text-white hover:bg-orange-500 hover:border-0 border-orange-500">Let&apos;s connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;