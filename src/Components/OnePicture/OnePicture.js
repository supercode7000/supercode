import React from 'react';
import './onePicture.css'
import zukunft from '../../img/zukunft.jpg'

const OnePicture = () => {
    return ( 
        <section className="OnePicture">
            <figure>
            <img src={zukunft} alt=""/>
            </figure>
        </section>
     );
}
 
export default OnePicture;