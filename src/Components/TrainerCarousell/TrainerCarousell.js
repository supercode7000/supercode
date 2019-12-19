import React, { Component } from 'react';
import './trainer-carousell.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import trainerData from './trainerData.js'


class TwoColSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainerData: trainerData,
            maxImg: trainerData.length,
            index: 0,
            nextIcon: <span className="slideArrowNext">&rarr;</span>,
            prevIcon: <span className="slideArrowPrev">&larr;</span>,
            direction: ""
        }
    };
    handleNext = () => {
        if (this.state.index < this.state.maxImg) {
            this.setState({ index: this.state.index + 1 });
        } else {
            this.setState({ index: 0 });
        }

    };
    handlePrev = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 });
        } else {
            this.setState({ index: this.state.maxImg });
        }
    };
    render() {
        const carouselPersonen = this.state.trainerData.map((data, i) => {
            return <Carousel.Item key={i}> <img
                className="d-block w-100"
                src={data.imgURL}
                alt={data.name}
            />
                <Carousel.Caption key={i}>
                    <h3>{data.name}</h3>
                    <p>{data.position}</p>
                </Carousel.Caption>
            </Carousel.Item>
        })
        return (
            <section className="trainer-carousel">
                <span className="trainer-carousel-aside">{this.props.aside}</span>
                <article>
                    <Carousel interval={0} indicators={false} activeIndex={this.state.index} controls={false}>
                        {carouselPersonen}
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={this.state.trainerData[this.state.index].imgURL}
                                alt="First slide"
                            />
                        </Carousel.Item> */}
                        {/* <Carousel.Item>
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
                        </Carousel.Item> */}
                    </Carousel>
                    <div className="SliderControle">
                        <span onClick={this.handlePrev} className="slideArrowPrev">&#10229;</span>
                        <span onClick={this.handleNext} className="slideArrowNext">&#10230;</span>
                    </div>
                </article>


                <article className="trainer-carousel-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </article>
            </section>);
    }

}






export default TwoColSection;