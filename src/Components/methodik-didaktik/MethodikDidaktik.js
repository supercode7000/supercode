import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFistRaised, faArrowsAlt, faLanguage, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel'
import './methodik-didaktik.css'
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faFistRaised, faArrowsAlt, faLanguage, faCompressArrowsAlt);


const MethodikDidaktik = () => {
    return (
        <section id="methodik-didaktik">
            <h2 className="methodik-didaktik-title"><span>Methodik</span>Didaktik</h2>
            <div className="methodik-didaktik-container">
                <article className="methodik-didaktik-item">
                    <FontAwesomeIcon color="#47d7ac" className="icon" icon="fist-raised" size="3x" />
                    <h4>Headline</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus. </p>
                </article>
                <article className="methodik-didaktik-item">
                    <FontAwesomeIcon color="#47d7ac" className="icon" icon="arrows-alt" size="3x" />
                    <h4>Headline</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus.</p>
                </article>
                <article className="methodik-didaktik-item">
                    <FontAwesomeIcon color="#47d7ac" className="icon" icon="language" size="3x" />
                    <h4>Headline</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus.</p>
                </article>
                <article className="methodik-didaktik-item">
                    <FontAwesomeIcon color="#47d7ac" className="icon" icon="compress-arrows-alt" size="3x" />
                    <h4>Headline</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus. </p>
                </article>
            </div>
            <Carousel indicators={false} id="methodik-didaktik-carousel">
                <Carousel.Item>
                    <article className="methodik-didaktik-item">
                        <FontAwesomeIcon color="#47d7ac" className="icon" icon="fist-raised" size="3x" />
                        <h4>Headline</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus. </p>
                    </article>
                </Carousel.Item>
                <Carousel.Item>
                    <article className="methodik-didaktik-item">
                        <FontAwesomeIcon color="#47d7ac" className="icon" icon="arrows-alt" size="3x" />
                        <h4>Headline</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus.</p>
                    </article>
                </Carousel.Item>
                <Carousel.Item>
                    <article className="methodik-didaktik-item">
                        <FontAwesomeIcon color="#47d7ac" className="icon" icon="language" size="3x" />
                        <h4>Headline</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus.</p>
                    </article>
                </Carousel.Item>
                <Carousel.Item>
                    <article className="methodik-didaktik-item">
                        <FontAwesomeIcon color="#47d7ac" className="icon" icon="compress-arrows-alt" size="3x" />
                        <h4>Headline</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit porro ipsum ducimus. </p>
                    </article>
                </Carousel.Item>

            </Carousel>


        </section>);
}

export default MethodikDidaktik;