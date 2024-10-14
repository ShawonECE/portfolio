import PropTypes from 'prop-types';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
    const { title, images, live, details, technologies } = project;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='relative group cursor-pointer'>
            <Swiper className='rounded-2xl project-slide'
                modules={[Navigation, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoHeight={true}
                effect="fade"
                data-aos="fade-right" data-aos-duration="3000"
                autoplay={{
                    delay: 2000
                }}
            >
                {
                    images.map((img, idx) => <SwiperSlide key={idx}><img className='w-full' src={img} alt="" /></SwiperSlide>)
                }

            </Swiper>

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity rounded-xl z-10"></div>
            {/* "View details" text */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
                <h3 className='text-3xl mb-5 text-white font-bold text-center playfair'>{title}</h3>
                <div className='flex gap-2'>
                    <button onClick={() => setModalOpen(true)} className="btn btn-sm text-white bg-orange-500 border-0 lato">Details</button>
                    <a href={live} className="btn btn-sm bg-transparent text-white hover:bg-orange-500 hover:border-0 border-orange-500 lato" target="_blank">Live Site</a>
                </div>
            </div>

            {/* booking modal */}
            <input type="checkbox" checked={modalOpen} id="my_modal_6" className="modal-toggle" readOnly />
            <div className="modal" role="dialog">
                <div className="modal-box p-0">
                    <figure className='w-full'><img src={images[0]} alt={title} /></figure>
                    <div className='px-5 pb-5 mt-5'>
                        <h2 className="card-title playfair">{title}</h2>
                        <p className='mb-4 mt-1 lato'>{details}</p>
                        <p className='font-bold mb-1 playfair'>Technologies</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                technologies.map((technology, idx) => <div key={idx} className="badge badge-outline lato">{technology}</div>)
                            }
                        </div>
                        <div className="card-actions justify-end">
                            <a href={live} className="btn bg-orange-500 border-0 text-white lato" target="_blank">Live Site</a>
                            <button onClick={() => setModalOpen(false)} className="btn bg-red-600 border-0 text-white lato">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectCard;