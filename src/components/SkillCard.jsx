import PropTypes from 'prop-types';

const SkillCard = ({ skill }) => {
    return (
        <div className="card glass">
            <figure className='px-10 lg:px-16 pt-10 lg:pt-16'><img src={ skill.logo } alt={ skill.title } /></figure>
            <div className="card-body">
                <h2 className="card-title text-white text-3xl justify-center lato">{ skill.title }</h2>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    skill: PropTypes.object.isRequired
};

export default SkillCard;