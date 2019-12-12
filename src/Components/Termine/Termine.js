import React, { Component } from 'react';
import './termine.css'
import TextExpandDates from '../TextExpandDates/TextExpandDates';

class Termine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className="termine">


                <div className="TextExpandContainer">
                    <TextExpandDates date="06.01.2020" type="Workshop" title="Web-Entwicklung Front-End" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                    <TextExpandDates date="06.01.2020" type="Workshop" title="Web-Entwicklung Front-End" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                    <TextExpandDates date="06.01.2020" type="Bootcamp 3 Monate Vollzeit" title="Web-Entwicklung Front-End" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                    <TextExpandDates date="06.01.2020" type="Bootcamp 6 Monate Teilzeit" title="Web-Entwicklung Front-End" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                </div>
                <div className="termine-aside">
                    <h1>Termine</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at?</p>
                </div>
            </section>
        );
    }
}

export default Termine;