import React from 'react';
import './carousel-card-item.css'

const CarouselCardItem = () => {
    return (
        <article id="carousel-card-item">
            <h4><i>3 Monate Vollzeit</i></h4>
            <h2><span>Web-Entwicklung</span> Front-End</h2>
            <p>📅 06.01.2020 <span>€7.900,-</span></p>
            <h3>WEB-Developement</h3>
            <p className="carousel-card-item-text">Web Developement Essentials, HTML, CSS, GIT / Terminal, Javascript, Javascript Frameworks & Libraries, CMS</p>
            <h3>PLUS SKILLS</h3>
            <p className="carousel-card-item-text">Design & UX, Learn to learn, Grundlagen Projekt Management, Grundlagen Präsentation</p>
            <h3>ABSCHLUSSPROJEKT</h3>
            <p className="carousel-card-item-text last">Struktur, Wieframe & Design, Präsentation</p>
            <a href="#">Jetzt Anmelden</a>
        </article>
    );
}

export default CarouselCardItem;