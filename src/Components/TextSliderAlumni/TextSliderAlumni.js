import React, { Component } from 'react';
import './textSliderAlumni.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'



const data = [
    { text: "Sorry, checking all the water in this area; there's an escaped fish. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself. I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too. I still don't know why.", autor: "Doctor Who 1", source: "Auszug aus Doctor Who", imgURL: "https://picsum.photos/id/391/200/200?1" },
    { text: "Stop talking, brain thinking. Hush. You've swallowed a planet! I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister.", autor: "Doctor Who 2", source: "Auszug aus Doctor Who", imgURL: "https://picsum.photos/id/321/501/201?2" },
    { text: "My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Tell her she looks thin.", autor: "Futurama", source: "Auszug aus Futurama", imgURL: "https://picsum.photos/id/361/800/400" }
]

class TextSliderAlumni extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        }

    }
    handleBack = () => {
        if (this.state.position > 0) {
            this.setState({ position: this.state.position - 1 });
        } else {
            this.setState({ position: data.length - 1 });
        }
    };
    handleForward = () => {
        if (this.state.position < data.length - 1) {
            this.setState({ position: this.state.position + 1 });
        } else {
            this.setState({ position: 0 });
        }
    }
    render() {
        return (
            <section className="textSliderAlumniSection">

                <article className="textSliderAlumniIcon">
                    <FontAwesomeIcon className="textSliderAlumniQuote" icon={faQuoteLeft} />
                    <div className="textSliderAlumniArticle">
                        <div className="textSliderAlumniText">
                            {data[this.state.position].text}
                        </div>
                        <footer className="textSliderAlumniFooter">
                            <figure className="textSliderAlumniSource">
                                <img src={data[this.state.position].imgURL} alt={data[this.state.position].autor} />
                                <figcaption>
                                    <p>{data[this.state.position].autor}</p>
                                    <p>{data[this.state.position].source}</p>
                                </figcaption>
                            </figure>

                            <div className="textSliderAlumniButton">
                                <div className="textSliderAlumniButtonBack" onClick={this.handleBack}>&lang;</div>
                                <div className="textSliderAlumniButtonForward" onClick={this.handleForward}>&rang;</div>
                            </div>
                        </footer>
                    </div>
                </article>

            </section>
        );
    }
}

export default TextSliderAlumni;


