import React from 'react';
import './workshop.css';

const Workshop = () => {
    return ( 
        <section className="Workshop">
            <span>Workshops</span>
            <figure>
            <img src="./img/DSC2283_LowRes.jpg" alt=""/>
                <figcaption>
                    <h1>Vivamus elementum semper nisi.</h1>
                    <p>Teste dich und uns und komm zu unserem kostenlosen HTML &amp; CSS Workshop aka. Mach dein Seepferdchen im Bereich Web Entwicklung.</p>
                    <a href="#">Workshop Termine</a>
                </figcaption>
                
            </figure>
        </section>
     );
}
 
export default Workshop;