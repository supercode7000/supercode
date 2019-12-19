import React from 'react';
import './trainer.css'
import TrainerCarousell from '../TrainerCarousell/TrainerCarousell'


const Trainer = () => {
    return ( 
        <section className="trainer">
            <span className="trainer-container-aside-span">Unsere Trainer*innen</span>
            <div className="trainer-container">
                <h1>Headline</h1>
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error placeat in dicta ipsam quae, nihil tempore ipsa. Dolorem tempore magni laboriosam tempora illum sit rem debitis!</p>
                <TrainerCarousell />
            </div>
        </section>
     );
}
 
export default Trainer;
