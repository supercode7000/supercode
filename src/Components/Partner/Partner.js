import React from 'react';
import './partner.css'
import CarouselPartner from './CarouselPartner';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const Partner = () => {
    return (
        <section id="partner">
            <div className="partner-container">
                <div className="partner-container-text">
                    <p>Unsere Partner sind von Anfangn an in den Ablaufer Kurse integriert - so ist die Praxisnähe garantiert</p>
                    <small>Du möchtest uns unterstützen und <a href="#">Partner</a> werden?</small>
                </div>
                <div className="partner-container-Carousel">
                    <Carousel indicators={true} controls={false}>
                        <Carousel.Item>
                            <CarouselPartner />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselPartner />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselPartner />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="bg"></div>
        </section >);
}

export default Partner;