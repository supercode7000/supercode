import React, { Component } from 'react';
import './curriculumCard.css'

class CurriculumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
        
    }
    onToggle = () => {
        // if (true) {
            this.setState({ expand: !this.state.expand });
        // }
    }
    render() {
        return (
            <div className="CurriculumCard" onClick={this.onToggle}>
                <div className="CurriculumCard-Item">
                    <div className="CurriculumCard-title">
                        <div className="CurriculumCard-title-description">
                            {this.props.data.titleDescription}
                        </div>
                        <div className="CurriculumCard-title-title">
                            {this.props.data.titleTitle}
                        </div>
                    </div>
                    <div className="CurriculumCard-locked">
                        <span>{this.state.expand ? '-' : '+'}</span>
                    </div>
                </div>
                <div className="CurriculumCard-expand" style={{display: this.state.expand ? 'block' : 'none' }}>{this.props.data.expandText}</div>
            </div>
        );
    }
}




export default CurriculumCard;


