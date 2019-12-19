import React, { Component } from 'react';
import './partner2.css'
import Carousel from 'react-bootstrap/Carousel'

class Partner2 extends Component {
    state = {}
    render() {
        return (
            <section className="partner-section">
                <aside>unser netzwerk</aside>
                <div className="partner-text">
                    <div className="partner-text-big">
                        Unsere Partner sind von Anfang an in den Ablauf der Kurse integriert - so ist die Praxisnähe garantiert.
                    </div>
                    <div className="partner-text-small">
                        Du möchtest uns unterstützen und <a href="#">Partner</a> werden?
                    </div>
                </div>
                <Carousel controls={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/partner/salzbrot.png"
                                alt="Salz und Brot"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/partner/salzbrot.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/partner/salzbrot.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            </section>
        );
    }
}

export default Partner2;