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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black bg-opacity-50 text-white text-lg lato">
                            <li><HashLink smooth to="#home" className={`${location.hash === "#home" ? "text-orange-500 font-bold" : ""} border-b-[1px] border-b-transparent hover:border-b-orange-500 rounded-none max-w-16 hover:bg-transparent lato`}>Home</HashLink></li>
                            <li><HashLink smooth to="#about" className={`${location.hash === "#about" ? "text-orange-500 font-bold" : ""} border-b-[1px] border-b-transparent hover:border-b-orange-500 rounded-none max-w-[86px] hover:bg-transparent lato`}>About Me</HashLink></li>
                            <li><HashLink smooth to="#skills" className={`${location.hash === "#skills" ? "text-orange-500 font-bold" : ""} border-b-[1px] border-b-transparent hover:border-b-orange-500 rounded-none max-w-14 hover:bg-transparent lato`}>Skills</HashLink></li>
                            <li><HashLink smooth to="#projects" className={`${location.hash === "#projects" ? "text-orange-500 font-bold" : ""} border-b-[1px] border-b-transparent hover:border-b-orange-500 rounded-none max-w-[72px] hover:bg-transparent lato`}>Projects</HashLink></li>
                            <li><HashLink smooth to="#contact" className={`${location.hash === "#contact" ? "text-orange-500 font-bold" : ""} border-b-[1px] border-b-transparent hover:border-b-orange-500 rounded-none max-w-[72px] hover:bg-transparent lato`}>Contact</HashLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 pb-1 text-white text-lg">
                        <li><HashLink smooth to="#home" className={`${location.hash === "#home" ? "text-orange-500 font-bold" : ""} border-b-2 border-b-transparent hover:border-b-orange-500 rounded-none hover:bg-transparent lato`}>Home</HashLink></li>
                        <li><HashLink smooth to="#about" className={`${location.hash === "#about" ? "text-orange-500 font-bold" : ""} border-b-2 border-b-transparent hover:border-b-orange-500 rounded-none hover:bg-transparent lato`}>About Me</HashLink></li>
                        <li><HashLink smooth to="#skills" className={`${location.hash === "#skills" ? "text-orange-500 font-bold" : ""} border-b-2 border-b-transparent hover:border-b-orange-500 rounded-none hover:bg-transparent lato`}>Skills</HashLink></li>
                        <li><HashLink smooth to="#projects" className={`${location.hash === "#projects" ? "text-orange-500 font-bold" : ""} border-b-2 border-b-transparent hover:border-b-orange-500 rounded-none hover:bg-transparent lato`}>Projects</HashLink></li>
                        <li><HashLink smooth to="#contact" className={`${location.hash === "#contact" ? "text-orange-500 font-bold" : ""} border-b-2 border-b-transparent hover:border-b-orange-500 rounded-none hover:bg-transparent lato`}>Contact</HashLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="group inline-block">
                        <a href="https://drive.google.com/file/d/1xZHfJ6ia257L_QHh5UISyzACRSGLPFh6/view?usp=drive_link" target="blank" className="btn btn-sm md:btn-md text-base group-hover:text-lg md:text-lg md:group-hover:text-xl bg-transparent text-white group-hover:text-gray-950 group-hover:bg-orange-500 hover:border-0 border-orange-500 lato"><MdOutlineFileDownload className="text-xl lg:text-2xl" />Resume</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;