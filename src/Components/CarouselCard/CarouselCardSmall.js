import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselCardItem from './CarouselCardItem';
import './carousel-card.css'
const CarouselCardSmall = () => {
    return (
        <section id="carousel-card-small">
            <Carousel controls={false} >
                <Carousel.Item>
                    <CarouselCardItem />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselCardItem />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselCardItem />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default CarouselCardSmall;