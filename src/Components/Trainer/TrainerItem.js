import React from 'react';
import './trainerItem.css'

const TrainerItem = (props) => {
    return ( 
        <figure className="TrainerItem">
            <img src={props.imgURL} alt={props.name}/>
            <figcaption>
                <div className="TrainerItem-name">{props.name}</div>
                <div className="TrainerItem-position">{props.position}</div>
            </figcaption>
        </figure>
     );
}
 
export default TrainerItem;