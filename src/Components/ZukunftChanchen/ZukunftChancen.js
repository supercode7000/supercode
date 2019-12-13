import React from 'react';
import './zukunftChancen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const ZukunftChancen = () => {
    return ( 
        <section className="ZukunftChancen">
            <span> <FontAwesomeIcon icon={faPhoneAlt} />+49 211 7817 233-0</span>
            <h1>Zukunft &#38; Chancen</h1>
            <figure>
                <img src="./img/DSC2283_LowRes.jpg" alt="superCode Kursalltag"/>
                <figcaption>
                    <h2>Maecenas tempus, condimentum rhoncus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem minus vel, dolorem cum quasi et amet ex fugit nostrum at, aperiam pariatur officiis asperiores optio eligendi eius quo dolor? Unde cumque aspernatur ab odit, quam voluptates illo ullam, ducimus quia sit, fugit autem explicabo.</p>
                </figcaption>
            </figure>
        </section>
     );
}
 
export default ZukunftChancen;