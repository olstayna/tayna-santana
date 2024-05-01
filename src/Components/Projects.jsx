import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectsSlide from "../Data/projects.json";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import LanguageIcons from "./Icons";
import Modal from "./Modal"
import { themeContext } from "../Context";
import { useContext } from "react";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModalHandler = (project) => {
        setSelectedProject(project);
    };

    const closeModalHandler = () => {
        setSelectedProject(null);
    };

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <section className="container">
            <div className="projects" id="projects">
                <h2>Projetos</h2>
                <h3>Conheça alguns de meus projetos</h3>
                <Swiper
                    spaceBetween={40}
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {ProjectsSlide && ProjectsSlide.map(item => (
                        <SwiperSlide key={item.id} className="slide">
                            <div className="project-image">
                                <img src={item.img} alt={`Preview do Projeto ${item.title}`} title={item.title} className="slide-photo" />
                            </div>
                            <div className="slide-content">
                                <h4 style={{ color: lightMode ? 'white' : '' }}>{item.title}</h4>
                                <p style={{ color: lightMode ? 'white' : '' }}>{item.short_description}</p>
                                <div className="project-details">
                                    <div className="project-icons">
                                        {Array.isArray(item.icons) && item.icons.map((iconName, index) => {
                                            const IconComponent = LanguageIcons[iconName];
                                            return <IconComponent key={index} />;
                                        })}
                                    </div>
                                    <div className="rightBtn">
                                        <button onClick={() => openModalHandler(item)} className="modalBtn">Ver mais</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <Modal project={selectedProject} open={!!selectedProject} onClose={closeModalHandler} />
            </div>
        </section>
    );
}

export default Projects;