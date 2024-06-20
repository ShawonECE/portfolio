import SkillCard from "./SkillCard";

const Skills = () => {
    const skills = [
        {
            title: 'JavaScript',
            logo: 'https://i.ibb.co/HBgdnQv/Java-Script-logo.png'
        },
        {
            title: 'React',
            logo: 'https://i.ibb.co/bWdJdHs/react-logo.png'
        },
        {
            title: 'Tailwind CSS',
            logo: 'https://i.ibb.co/ZcYc4sz/tailwind-logo.png'
        },
        {
            title: 'Node.js',
            logo: 'https://i.ibb.co/jRw4r9L/node-logo.png'
        },
        {
            title: 'ExpressJS',
            logo: 'https://i.ibb.co/YQSthwh/express.png'
        },
        {
            title: 'MongoDB',
            logo: 'https://i.ibb.co/jWdt14n/mongo-logo.png'
        },
        {
            title: 'Bootstrap',
            logo: 'https://i.ibb.co/vx5wsm1/bootstrap-logo.png'
        },
        {
            title: 'HTML',
            logo: 'https://i.ibb.co/x6nWhZK/html-logo.png'
        },
        {
            title: 'CSS',
            logo: 'https://i.ibb.co/0McxyX6/css-logo.png'
        },
        {
            title: 'Firebase',
            logo: 'https://i.ibb.co/tHr55Tx/firebase-logo.png'
        },
        {
            title: 'GitHub',
            logo: 'https://i.ibb.co/FBBJVxy/github-logo.png'
        },
        {
            title: 'Image BB',
            logo: 'https://i.ibb.co/XYhqdCF/imgbb-logo.png'
        },
    ];
    return (
        <div id='skills' className="bg-gradient-to-r from-black/90 to-gray-900">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className='text-3xl font-bold text-white mb-7 border-b-2 border-orange-500 pb-2 w-20'>Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        skills.map((skill, idx) => <SkillCard key={ idx } skill={ skill }></SkillCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;