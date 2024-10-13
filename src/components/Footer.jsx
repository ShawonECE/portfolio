import { FaFacebookSquare, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-black/90 text-neutral-content">
            <footer className="container footer mx-auto px-4 md:px-8 lg:px-12 py-12">
                <aside>
                    <h2 className="text-4xl text-orange-500 font-bold mb-4">Shahriar Shawon</h2>
                    <div className="flex gap-2 items-center">
                        <MdEmail className="text-xl text-orange-500" />
                        <p className="text-lg">shahriar.shawon.ece@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt className="text-lg text-orange-500" />
                        <p className="text-lg">+880 1775003179</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Digital Footprints</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div className="group tooltip tooltip-bottom tooltip-custom" data-tip="LinkedIn profile">
                            <a className="btn btn-circle btn-outline border-orange-500 group-hover:bg-orange-500" href="https://www.linkedin.com/in/shahriar-shawon-ece" target="blank">
                                <FaLinkedin className="text-orange-500 group-hover:text-gray-950 text-3xl" />
                            </a>
                        </div>
                        <div className="group tooltip tooltip-bottom tooltip-custom" data-tip="GitHub profile">
                            <a className="btn btn-circle btn-outline border-orange-500 group-hover:bg-orange-500" href="https://github.com/ShawonECE" target="blank">
                                <FaGithub className="text-orange-500 text-3xl group-hover:text-gray-950" />
                            </a>
                        </div>
                        <div className="group tooltip tooltip-bottom tooltip-custom" data-tip="Leetcode profile">
                            <a className="btn btn-circle btn-outline border-orange-500 group-hover:bg-orange-500" href="https://leetcode.com/u/ShawonECE" target="blank">
                                <SiLeetcode className="text-orange-500 group-hover:text-gray-950 text-3xl" />
                            </a>
                        </div>
                        <div className="group tooltip tooltip-bottom tooltip-custom" data-tip="Facebook profile">
                            <a className="btn btn-circle btn-outline border-orange-500 group-hover:bg-orange-500" href="https://www.facebook.com/shahriar.shawon.790" target="blank">
                                <FaFacebookSquare className="text-orange-500 text-3xl group-hover:text-gray-950" />
                            </a>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;