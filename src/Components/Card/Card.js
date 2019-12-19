import React from 'react';
import './card.css'
import CarouselCard from '../CarouselCard/CarouselCard';
import CarouselCardSmall from '../CarouselCard/CarouselCardSmall';
const Card = () => {
    return (
        <section id="card">

            <div className="card-title-container">
                <h1 className="card-title"><span>Intensiv,agil &</span> praxisorientiert!</h1>
            </div>
            <div className="card-description-container">
                <article>
                    <h3><span>BootCamps &</span>Workshops </h3>
                    <p className=''>Förderung durch einen <span><u>Bildungsgutschein,</u></span> <span>oder durch die</span> <u>CHANCEN eG</u> möglich</p>
                </article>
            </div>
            <CarouselCard className="carousel-card" />
            <CarouselCardSmall />
            <div className="bg"></div>
        </section>
    );
}

export default Card;