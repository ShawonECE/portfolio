import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import profile from '../assets/profile.jpg';
import { FaUserGraduate } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const About = () => {
    return (
        <div id='about' className="bg-gradient-to-r from-black/90 to-gray-900">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 py-24">
                    <div className="avatar mx-auto md:col-span-1 md:order-last">
                        <div className="w-48 h-48 rounded-full">
                            <img src={ profile } />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <p className='text-3xl font-bold text-white mb-5 border-b-2 border-orange-500 w-36 pb-2'>About Me</p>
                        <p className='text-white text-justify text-lg mb-2'>
                            I&apos;m Shahriar Shawon, a passionate web developer with a strong foundation in various technologies, from front-end design to back-end development. My experience building user-friendly web applications has honed my skills in crafting intuitive and functional user experiences.
                        </p>
                        <p className='text-white text-justify text-lg'>
                            My background in teaching math and physics instilled in me strong analytical and problem-solving abilities. These skills translate seamlessly into web development, allowing me to approach challenges creatively and deliver efficient solutions.
                        </p>
                        <div className='flex items-center gap-2 mt-4 mb-3'>
                            <FaUserGraduate className='text-orange-500 text-xl' />
                            <p className='text-white text-lg'>Electronics & Communication Engineering, Khulna University</p>
                        </div>
                        <div className='flex flex-wrap gap-x-16 gap-y-3'>
                            <div className='flex items-center gap-2'>
                                <FaLocationDot className='text-orange-500 text-xl'/>
                                <p className='text-white text-lg'>Khulna, Bangladesh</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdEmail className='text-orange-500 text-xl'/>
                                <p className='text-white text-lg'>shahriar.shawon.ece@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaPhone className='text-orange-500 text-xl'/>
                                <p className='text-white text-lg'>+880 1775003179</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;