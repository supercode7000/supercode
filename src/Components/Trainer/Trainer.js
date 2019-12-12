import React from 'react';
import './trainer.css'
import TrainerItem from './TrainerItem';


const Trainer = () => {
    return ( 
        <section className="trainer">
            <span>Unsere Trainer*innen</span>
            <div className="trainer-container">
                <h1>Headline</h1>
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error placeat in dicta ipsam quae, nihil tempore ipsa. Dolorem tempore magni laboriosam tempora illum sit rem debitis!</p>
                <TrainerItem name="Sam Jayhooni" position="Head of Training" imgURL="./img/trainer/sam.jpg" />
                <TrainerItem name="Sam Jayhooni" position="Head of Training" imgURL="./img/trainer/sam.jpg" />
                <TrainerItem name="Sam Jayhooni" position="Head of Training" imgURL="./img/trainer/sam.jpg" />
                <TrainerItem name="Sam Jayhooni" position="Head of Training" imgURL="./img/trainer/sam.jpg" />
                <TrainerItem name="Sam Jayhooni" position="Head of Training" imgURL="./img/trainer/sam.jpg" />
            </div>
        </section>
     );
}
 
export default Trainer;
