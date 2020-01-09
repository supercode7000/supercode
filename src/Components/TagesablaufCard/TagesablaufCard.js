import React, { Component } from 'react';
import './tagesablaufCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'



class TagesablaufCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="TagesablaufCard">
                <div className="Tagesablauf-Time">
                    <span className="Tagesablauf-Time-span">{this.props.data.time}</span>
                    {this.props.data.time2}
                </div>
                <div className="Tagesablauf-Info">
                    <div className="Tagesablauf-Info-type">{this.props.data.info}</div>
                    <div className="Tagesablauf-Info-title">{this.props.data.info2}</div>
                </div>
                <div className="Tagesablauf-Dauer">
                    <FontAwesomeIcon icon={faClock} /> {this.props.data.dauer} 
                </div>
            </div>
         );
    }
}
 
export default TagesablaufCard;