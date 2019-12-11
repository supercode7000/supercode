import React from 'react';
import './videoComponent.css'

const VideoComponent = () => {
    return (
        <section className="videoContainer">
            <h5 className="textSeite">WERDE SUPERCODER*IN</h5>
            <div className="videoContainerTextContainer">
                <p className="videoContainerText">Vorerfahrung ist nicht notwendig - alles was du brauchst ist Motivation und unsere Super Trainer*innen</p>
            </div>
            <div class="iframe-container">
            <iframe src="https://www.youtube.com/embed/eoCQcDdGSV4?rel=0&showinfo=0&autohide=1" title="SuperCode Youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    );
}

export default VideoComponent;