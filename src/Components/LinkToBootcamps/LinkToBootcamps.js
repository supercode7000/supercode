import React from 'react';
import './linktobootcamps.css'

const LinkToBootcamps = (props) => {
    return (
        <section id="link-to-bootcamps" className={props.displayGray ? 'bg-gray' : 'bg-green'}>
            <p>{props.displayGray ? text1 : text2}</p>
            <article>
                <h3>BootCamps <span>⟶ </span></h3>
                <p className={props.displayGray ? 'description-green' : 'description-white'}>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </article>
            <article>
                <h3>Workshops <span>⟶ </span></h3>
                <p className={props.displayGray ? 'description-green' : 'description-white'}>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </article>
        </section>)
        ;
}

export default LinkToBootcamps;

const text1 = "Wir bieten Menschen einen modernen Ansatz für lebenslages Lernen. Beginne Deinen neuen Lebensabschnitt mit einem unserer Web-Development BootCamps!"
const text2 = "Dein Studium passt nicht mehr zu Dir, in deinem Beruf gibt es keine Zukunft oder du willst was ganz neues starten? Lerne das Programmiern moderner Webstes, App-Anwendungen & Apps und finde einen Job mit Zukunft"