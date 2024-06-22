import { MdOutlineFileDownload } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="bg-black bg-opacity-50 w-full fixed z-20">
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="lg:hidden mr-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black bg-opacity-50 text-white text-lg">
                            <li><HashLink smooth to="#home" className={location.hash === "#home" ? "text-orange-500 font-bold" : ""}>Home</HashLink></li>
                            <li><HashLink smooth to="#about" className={location.hash === "#home" ? "text-orange-500 font-bold" : ""}>About Me</HashLink></li>
                            <li><HashLink smooth to="#skills" className={location.hash === "#home" ? "text-orange-500 font-bold" : ""}>Skills</HashLink></li>
                            <li><HashLink smooth to="#projects" className={location.hash === "#home" ? "text-orange-500 font-bold" : ""}>Projects</HashLink></li>
                            <li><HashLink smooth to="#contact" className={location.hash === "#home" ? "text-orange-500 font-bold" : ""}>Contact</HashLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-lg">
                        <li><HashLink smooth to="#home" className={location.hash === "#home" || location.hash === "" ? "text-orange-500 font-bold" : ""}>Home</HashLink></li>
                        <li><HashLink smooth to="#about" className={location.hash === "#about" ? "text-orange-500 font-bold" : ""}>About Me</HashLink></li>
                        <li><HashLink smooth to="#skills" className={location.hash === "#skills" ? "text-orange-500 font-bold" : ""}>Skills</HashLink></li>
                        <li><HashLink smooth to="#projects" className={location.hash === "#projects" ? "text-orange-500 font-bold" : ""}>Projects</HashLink></li>
                        <li><HashLink smooth to="#contact" className={location.hash === "#contact" ? "text-orange-500 font-bold" : ""}>Contact</HashLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://drive.google.com/file/d/1xZHfJ6ia257L_QHh5UISyzACRSGLPFh6/view?usp=drive_link" className="btn text-lg bg-transparent text-white hover:bg-orange-500 hover:border-0 border-orange-500"><MdOutlineFileDownload className="text-2xl" />Resume</a>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;