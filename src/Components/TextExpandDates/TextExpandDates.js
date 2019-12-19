import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import './textExpandDates.css'




class TextExpand extends Component {
    constructor(props) {
        super(props);
        this.state = { expand: false }
    }
    onToggle = () => {
        this.setState({ expand: !this.state.expand });
    }
    render() {
        return (
            <div onClick={this.onToggle} className="TextExpandDates">
                <div className="TextExpandDates-container">
                    <div className="TextExpandDates-date"><FontAwesomeIcon icon={faCalendar} /> {this.props.date}</div>
                    <div className="TextExpandDates-infos">
                        <div className="TextExpandDates-type">{this.props.type}</div>
                        <div className="TextExpandDates-type-title">{this.props.title}</div>
                    </div>
                    <div className="TextExpandDates-button"><span>{this.state.expand ? '-' : '+'}</span> </div>
                </div>
                <div className="TextExpandDates-expand" style={{display: this.state.expand ? 'block' : 'none' }}>{this.props.expandText}</div>
            </div>
        );
    }
}

export default TextExpand;