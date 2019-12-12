import React from 'react';
import './two-col-section.css'

const TwoColSection = (props) => {
    return (
        <section className="two-col-section">
            <span>{props.aside}</span>
            <article>
                <img className={props.isWhite ? 'white' : 'green'} src={props.img} alt="" />
            </article>
            <article className="two-col-section-text">
                <h2>{props.title}</h2>
                <h2>{props.title2}</h2>
                <p>{props.description}</p>
                <a href="#">{props.link}</a>
            </article>
        </section>);
}

export default TwoColSection;