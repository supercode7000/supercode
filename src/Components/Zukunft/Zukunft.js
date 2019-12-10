import React from 'react';
import './zukunft.css'
import LinkToBootcamps from '../LinkToBootcamps/LinkToBootcamps';
import zukunft from '../../img/zukunft.jpg'
const Zukunft = () => {
    return (

        <section id="zukunft">
            <span>Unsere Bootcamps</span>
            <div>
                <h1 className="zukunft-title"><span>Denkt du über</span> deine Zukunft nach</h1>
            </div>
            <LinkToBootcamps displayGray={false} />
            <img src={zukunft} alt="" />
        </section>)
}

export default Zukunft;