import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCardItem from './CarouselCardItem';
import './carousel-card.css'




const CarouselCard = () => {
    return (
        <section id="carousel-card">
            <div id="carousel-card-container">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 992
                            },
                            items: 2,
                            partialVisibilityGutter: 50
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 992,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 0
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <CarouselCardItem />
                    <CarouselCardItem />
                    <CarouselCardItem />
                    <CarouselCardItem />
                </Carousel>
            </div>
        </section>);
}

export default CarouselCard;