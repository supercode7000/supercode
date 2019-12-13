import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogItem from './BlogItem';
import './blog.css'

const Blog = () => {
    return (<section id="blog">
        <span class="blog-aside">Unser Blog</span>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-blog"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2,
                    partialVisibilityGutter: 40
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
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            infinite
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </Carousel>
    </section>);
}

export default Blog;

