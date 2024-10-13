import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: 'Compass',
            images: [
                'https://i.ibb.co/6b9K2Vm/c1.png',
                'https://i.ibb.co/W6KmbWB/c2.png',
                'https://i.ibb.co/6HFs98J/c3.png',
                'https://i.ibb.co/QHVMc6S/c4.png',
                'https://i.ibb.co/61HfnDX/c5.png',
                'https://i.ibb.co/vHRjv7W/c6.png',
                'https://i.ibb.co/hF53YWT/c7.png',
                'https://i.ibb.co/XLFSZ6j/c8.png',
                'https://i.ibb.co/GCcSHBX/c9.png',
                'https://i.ibb.co/L0fxZWB/c10.png'
            ],
            live: 'https://compass-55799.web.app',
            details: 'Compass is a user-friendly tourism platform that streamlines trip planning, connecting travelers with curated experiences and expert guides.',
            technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'React Hook Form', 'JWT', 'Tanstack Query']
        },
        {
            title: 'JobQuest',
            images: [
                'https://i.ibb.co/m6P4RfW/j1.png',
                'https://i.ibb.co/n7cbD5p/j2.png',
                'https://i.ibb.co/x2zbVNN/j3.png',
                'https://i.ibb.co/j62XgPt/j4.png',
                'https://i.ibb.co/mGrkSM6/j5.png',
                'https://i.ibb.co/XbQfhmx/j6.png',
                'https://i.ibb.co/WHkd3ZX/j7.png'
            ],
            live: 'https://job-quest1.netlify.app',
            details: 'JobQuest is a comprehensive Job hunting and posting portal.',
            technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'React Hook Form', 'JWT', 'Tanstack Query']
        },
        {
            title: 'Artifex',
            images: [
                'https://i.ibb.co/LdWMSkz/a1.png',
                'https://i.ibb.co/jHvwGTf/a2.png',
                'https://i.ibb.co/XsDNHhX/a3.png',
                'https://i.ibb.co/qpHWFK4/a4.png',
                'https://i.ibb.co/8rNcBc5/a5.png',
                'https://i.ibb.co/p3f586q/a6.png'
            ],
            live: 'https://artifex-27893.web.app',
            details: 'Artifex is an online marketplace to showcase and sell unique, handcrafted creations by artisans.',
            technologies: ['React', 'Express', 'MongoDB', 'React Hook Form', 'Firebase']
        }
    ];
    return (
        <div id='projects' className="bg-gradient-to-r from-black/90 to-gray-900 pb-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className='text-4xl font-bold text-white mb-7 pt-20 border-b-2 border-orange-500 pb-1 w-[122px] playfair'>Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        projects.map((project, idx) => <ProjectCard key={ idx } project={ project }></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;