import React, { Component } from 'react';
import './two-col-section-slider.css';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';


const Image1 = "https://picsum.photos/id/866/800/400";
const Image2 = "https://picsum.photos/id/826/800/400";
const Image3 = "https://picsum.photos/id/816/800/400";

class TwoColSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxImg: 2,
            index: 1,
            nextIcon: <span className="slideArrowNext">&rarr;</span>,
            prevIcon: <span className="slideArrowPrev">&larr;</span>,
            direction: ""
        }
    };
    handleNext = () => {
        if (this.state.index < this.state.maxImg) {
            this.setState({ index: this.state.index +1 });    
        } else {
            this.setState({ index: 0 });
        }
        
    } ;
    handlePrev = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index -1 });    
        } else {
            this.setState({ index: this.state.maxImg });
        }
    } ;
    render() {
        return (
            <section className="two-col-section-slider">
                <span className="two-col-section-slider-aside">{this.props.aside}</span>
                <article>
                    <Carousel interval={0} indicators={false} activeIndex={this.state.index} controls={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="SliderControle">
                        <span onClick={this.handlePrev} className="slideArrowPrev">&#10229;</span>
                        <span onClick={this.handleNext} className="slideArrowNext">&#10230;</span>
                    </div>
                </article>


                <article className="two-col-section-slider-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </article>
            </section>);
    }

}






export default TwoColSection;